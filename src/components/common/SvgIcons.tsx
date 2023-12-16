import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import parse from 'html-react-parser';
import { useQuery } from 'react-query';
import { svgNamesType } from '../../assets/icons/svgNames';
import UTILS from '../../utils';

export interface SvgIconProps {
  /**
   * Имя иконки. По данному имени ищется совпадение иконки в папке src/ui/svg/icons
   */
  name: svgNamesType;
  /**
   * Возможность прокидывать классы в SvgIcon. Пример className: 'first-class second-class'
   */
  className?: string;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  hoveredColor?: string;
  color?: string;
}

export default (props: SvgIconProps) => {
  const { color } = props;
  const [isHovered, setHovered] = useState(false);
  const { data } = useQuery(UTILS.RequestCacheEnum.Image + props.name, async () => {
    const { name } = props;
    let data = '';
    let isImg = false;
    if (name.endsWith('.png')) {
      isImg = true;
    }

    if (name.startsWith('/uploads/')) {
      const url = process.env.REACT_APP_CDN_ENDPOINT + name;
      if (isImg) {
        data = url;
      } else {
        data = await (await fetch(url)).text();
      }
    } else {
      const url = await import(`../../assets/icons/${name}.svg`);
      data = await (await fetch(url.default)).text();
    }
    return { data, isImg };
  });

  const icon = data;

  let width = props.width || props.height;
  let height = props.height || props.width;

  if (typeof width === 'number') {
    width = `${width}px`;
  }

  if (typeof height === 'number') {
    height = `${height}px`;
  }

  const size = width && height
    ? {
      width,
      height,
    }
    : {};

  const parsedIcon = useMemo(() => {
    if (!icon?.data) return null;
    if (icon.isImg) {
      return <img src={icon.data} width={size.width} height={size.height} />;
    }
    return React.cloneElement(parse(icon.data.trim()), {
      className: `svg-icon ${props.className ? props.className : ''}`,
      ...size,
      fill: (isHovered && props.hoveredColor) || color || 'none',
      color: (isHovered && props.hoveredColor) || color || 'none',
      onMouseOver: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onClick: () => props.onClick && props.onClick(),
    });
  }, [icon, props.className, props.color, isHovered]);

  if (!data) return null;

  return parsedIcon;
};
