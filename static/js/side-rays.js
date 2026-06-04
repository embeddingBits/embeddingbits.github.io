(function () {
  'use strict';

  const hexToRgb = function (hex) {
    var m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return m
      ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255]
      : [1, 1, 1];
  };

  const originToFlip = function (origin) {
    switch (origin) {
      case 'top-left':
        return [1, 0];
      case 'bottom-right':
        return [0, 1];
      case 'bottom-left':
        return [1, 1];
      default:
        return [0, 0];
    }
  };

  var SideRays = function (container, options) {
    if (!container) return;
    var self = this;
    self.container = container;
    self.opts = {
      speed: options.speed || 2.5,
      rayColor1: options.rayColor1 || '#EAB308',
      rayColor2: options.rayColor2 || '#96c8ff',
      intensity: options.intensity || 2,
      spread: options.spread || 2,
      origin: options.origin || 'top-right',
      tilt: options.tilt || 0,
      saturation: options.saturation || 1.5,
      blend: options.blend || 0.75,
      falloff: options.falloff || 1.6,
      opacity: options.opacity || 1.0,
    };
    self.uniforms = null;
    self.renderer = null;
    self.mesh = null;
    self.animationId = null;
    self.cleanup = null;

    self.init();
  };

  SideRays.prototype.init = function () {
    var self = this;
    if (!self.container || typeof window.ogl === 'undefined') return;

    var renderer = new window.ogl.Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
    });
    self.renderer = renderer;
    var gl = renderer.gl;
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.position = 'absolute';
    gl.canvas.style.inset = '0';
    gl.canvas.style.pointerEvents = 'none';
    self.container.appendChild(gl.canvas);

    var vert = [
      'attribute vec2 position;',
      'void main() {',
      '  gl_Position = vec4(position, 0.0, 1.0);',
      '}',
    ].join('\n');

    var frag = [
      'precision highp float;',
      '',
      'uniform float iTime;',
      'uniform vec2 iResolution;',
      'uniform float iSpeed;',
      'uniform vec3 iRayColor1;',
      'uniform vec3 iRayColor2;',
      'uniform float iIntensity;',
      'uniform float iSpread;',
      'uniform float iFlipX;',
      'uniform float iFlipY;',
      'uniform float iTilt;',
      'uniform float iSaturation;',
      'uniform float iBlend;',
      'uniform float iFalloff;',
      'uniform float iOpacity;',
      '',
      'float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed) {',
      '  vec2 sourceToCoord = coord - raySource;',
      '  float cosAngle = dot(normalize(sourceToCoord), rayRefDirection);',
      '  return clamp(',
      '    (0.45 + 0.15 * sin(cosAngle * seedA + iTime * speed)) +',
      '    (0.3 + 0.2 * cos(-cosAngle * seedB + iTime * speed)),',
      '    0.0, 1.0) *',
      '    clamp((iResolution.x - length(sourceToCoord)) / iResolution.x, 0.5, 1.0);',
      '}',
      '',
      'void main() {',
      '  vec2 fragCoord = gl_FragCoord.xy;',
      '  if (iFlipX > 0.5) fragCoord.x = iResolution.x - fragCoord.x;',
      '  if (iFlipY > 0.5) fragCoord.y = iResolution.y - fragCoord.y;',
      '',
      '  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);',
      '  vec2 rayPos = vec2(iResolution.x * 1.1, -0.5 * iResolution.y);',
      '',
      '  float tiltRad = iTilt * 3.14159265 / 180.0;',
      '  float cs = cos(tiltRad);',
      '  float sn = sin(tiltRad);',
      '  vec2 rel = coord - rayPos;',
      '  vec2 tiltedCoord = vec2(rel.x * cs - rel.y * sn, rel.x * sn + rel.y * cs) + rayPos;',
      '',
      '  float halfSpread = iSpread * 0.275;',
      '  vec2 rayRefDir1 = normalize(vec2(cos(0.785398 + halfSpread), sin(0.785398 + halfSpread)));',
      '  vec2 rayRefDir2 = normalize(vec2(cos(0.785398 - halfSpread), sin(0.785398 - halfSpread)));',
      '',
      '  vec4 rays1 = vec4(iRayColor1, 1.0) * rayStrength(rayPos, rayRefDir1, tiltedCoord, 36.2214, 21.11349, iSpeed);',
      '  vec4 rays2 = vec4(iRayColor2, 1.0) * rayStrength(rayPos, rayRefDir2, tiltedCoord, 22.3991, 18.0234, iSpeed * 0.2);',
      '',
      '  vec4 color = rays1 * (1.0 - iBlend) * 0.9 + rays2 * iBlend * 0.9;',
      '',
      '  float distanceToLight = length(fragCoord.xy - vec2(rayPos.x, iResolution.y - rayPos.y)) / iResolution.y;',
      '  float brightness = iIntensity * 0.4 / pow(max(distanceToLight, 0.001), iFalloff);',
      '  color.rgb *= brightness;',
      '',
      '  float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));',
      '  color.rgb = mix(vec3(gray), color.rgb, iSaturation);',
      '',
      '  color.a = max(color.r, max(color.g, color.b)) * iOpacity;',
      '  gl_FragColor = color;',
      '}',
    ].join('\n');

    var opts = self.opts;
    var flip = originToFlip(opts.origin);
    var uniforms = {
      iTime: { value: 0 },
      iResolution: { value: [1, 1] },
      iSpeed: { value: opts.speed },
      iRayColor1: { value: hexToRgb(opts.rayColor1) },
      iRayColor2: { value: hexToRgb(opts.rayColor2) },
      iIntensity: { value: opts.intensity },
      iSpread: { value: opts.spread },
      iFlipX: { value: flip[0] },
      iFlipY: { value: flip[1] },
      iTilt: { value: opts.tilt },
      iSaturation: { value: opts.saturation },
      iBlend: { value: opts.blend },
      iFalloff: { value: opts.falloff },
      iOpacity: { value: opts.opacity },
    };
    self.uniforms = uniforms;

    var geometry = new window.ogl.Triangle(gl);
    var program = new window.ogl.Program(gl, { vertex: vert, fragment: frag, uniforms: uniforms });
    var mesh = new window.ogl.Mesh(gl, { geometry: geometry, program: program });
    self.mesh = mesh;

    var updateSize = function () {
      if (!self.container || !renderer) return;
      renderer.dpr = Math.min(window.devicePixelRatio, 2);
      var w = self.container.clientWidth;
      var h = self.container.clientHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value = [w * renderer.dpr, h * renderer.dpr];
    };

    var loop = function (t) {
      if (!self.renderer || !self.uniforms || !self.mesh) return;
      self.uniforms.iTime.value = t * 0.001;
      try {
        renderer.render({ scene: mesh });
        self.animationId = requestAnimationFrame(loop);
      } catch (e) {
        return;
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();
    self.animationId = requestAnimationFrame(loop);

    self.cleanup = function () {
      if (self.animationId) {
        cancelAnimationFrame(self.animationId);
        self.animationId = null;
      }
      window.removeEventListener('resize', updateSize);
      if (renderer) {
        try {
          var loseCtx = renderer.gl.getExtension('WEBGL_lose_context');
          if (loseCtx) loseCtx.loseContext();
          var canvas = renderer.gl.canvas;
          if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
        } catch (e) {}
      }
      self.renderer = null;
      self.uniforms = null;
      self.mesh = null;
    };
  };

  SideRays.prototype.destroy = function () {
    if (this.cleanup) this.cleanup();
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = SideRays;
  } else {
    window.SideRays = SideRays;
  }
})();
