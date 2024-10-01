import React from 'react';
import PropTypes from 'prop-types';
import { useSprite } from './useSprite';
export { useSprite, loadImage } from './useSprite';

const noop = () => {};

const propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sprite: PropTypes.string,
  scale: PropTypes.number,
  direction: PropTypes.string,
  shouldAnimate: PropTypes.bool,
  loop: PropTypes.bool,
  startFrame: PropTypes.number,
  fps: PropTypes.number,
  stopLastFrame: PropTypes.bool,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  onEnd: PropTypes.func,
  frameCount: PropTypes.number,
  wrapAfter: PropTypes.number,
  frame: PropTypes.number,
  reset: PropTypes.bool,
};

export const SpriteAnimator = ({
  startFrame = 0,
  sprite,
  width,
  height,
  direction = 'horizontal',
  onError = noop,
  onLoad = noop,
  onEnd = noop,
  frameCount,
  fps = 60,
  shouldAnimate = true,
  stopLastFrame,
  reset,
  frame,
  className,
  scale = 1,
  wrapAfter,
}) => {
  const style = useSprite({
    startFrame,
    sprite,
    width,
    height,
    direction,
    onError,
    onLoad,
    onEnd,
    frameCount,
    fps,
    shouldAnimate,
    stopLastFrame,
    reset,
    frame,
    scale,
    wrapAfter,
  });

  return <div className={className} style={style} />;
};

SpriteAnimator.propTypes = propTypes;
