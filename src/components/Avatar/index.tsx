import React from 'react';
import {
    AvatarBorderTypeEnum,
    AvatarSizeType,
    AvatarStyleTypeEnum,
    AvatarVariantEnum
} from "../../typings/avatar";
import Icon from "../Icons/Icon";
import {StatusIcon} from "./style";
import {css} from "@emotion/css";
import {IconColorEnum} from "../../typings/icon";
import {Avatar as AntAvatar} from "antd";
import styled from "@emotion/styled";
import {sizeFormat} from "../../utils/sizeFormat";


const statusIconPosition = {
    [AvatarBorderTypeEnum.circle]: {
        ['xxl']: css`
          top: 1em;
          right: 1em;
          width: 8px;
          height: 8px;
        `,
        xl: css`
          top: 0.42em;
          right: 0.42em;
          width: 8px;
          height: 8px;
        `,
        lg: css`
          top: 0.15em;
          right: 0.15em;
          width: 8px;
          height: 8px;
        `,
        sm: css`
          top: 0.05em;
          right: 0.05em;
          width: 6px;
          height: 6px;
        `,
        xs: css`
          top: 0.05em;
          right: 0.05em;
          width: 4px;
          height: 4px;
        `
    },
    [AvatarBorderTypeEnum.square]: {
        xxl: css`
          top: 0;
          right: 0;
          width: 8px;
          height: 8px;
        `,
        xl: css`
          top: 0;
          right: 0;
          width: 8px;
          height: 8px;
        `,
        lg: css`
          top: 0;
          right: 0;
          width: 8px;
          height: 8px;
        `,
        sm: css`
          top: 0;
          right: 0;
          width: 6px;
          height: 6px;
        `,
        xs: css`
          top: 0;
          right: 0;
          width: 4px;
          height: 4px;
        `
    }
}

interface AvatarProps {
    size?: AvatarSizeType,
    styleType?: AvatarStyleTypeEnum,
    variant?: AvatarVariantEnum,
    borderType?: AvatarBorderTypeEnum,
    src?: string,
    active?: boolean,
    textColor?: string,
    initials: {
        firstName: string,
        lastName: string
    },
}

const BaseAvatar: React.FC<AvatarProps> = ({
                                               src,
                                               active,
                                               styleType = AvatarStyleTypeEnum.simple,
                                               size = 'xs',
                                               variant = AvatarVariantEnum.icon,
                                               borderType = AvatarBorderTypeEnum.circle,
                                               initials,
                                               textColor = 'rgba(17, 25, 40, 1)'
                                           }) => {
    const position = typeof size === 'string' ? size : 'xxl'

    switch (variant) {
        case AvatarVariantEnum.text:
            return (
                <div className={css`width: ${sizeFormat(size)}px;
                  position: relative`}>
                    <AntAvatar className={css`
                      font-family: Inter,serif;
                      font-weight: 700;
                      color: ${textColor};
                      border-radius: ${borderType === AvatarBorderTypeEnum.circle ? '50%' : '8px'};
                      border: ${styleType === AvatarStyleTypeEnum.outline ? '1px solid rgba(209, 213, 219, 1)' : 'none'};

                    `}
                               size={sizeFormat(size)}
                               icon={`${initials.firstName.charAt(0).toUpperCase()}${initials.lastName.charAt(0).toUpperCase()}`}
                    />
                    {active && <StatusIcon className={statusIconPosition[borderType][position]}/>}
                </div>
            )
        case AvatarVariantEnum.image:
            return (
                <div className={css`width: ${sizeFormat(size)}px;
                  position: relative`}>
                    <AntAvatar className={css`
                      border-radius: ${borderType === AvatarBorderTypeEnum.circle ? '50%' : '8px'};
                      border: ${styleType === AvatarStyleTypeEnum.outline ? '1px solid rgba(209, 213, 219, 1)' : 'none'};

                    `}
                               size={sizeFormat(size)}
                               src={src}
                    />
                    {active && <StatusIcon className={statusIconPosition[borderType][position]}/>}
                </div>
            )
        case AvatarVariantEnum.icon:
            return (
                <div className={css`width: ${sizeFormat(size)}px;
                  position: relative`}>
                    <AntAvatar className={css`
                      border-radius: ${borderType === AvatarBorderTypeEnum.circle ? '50%' : '8px'};
                      border: ${styleType === AvatarStyleTypeEnum.outline ? '1px solid rgba(209, 213, 219, 1)' : 'none'};
                    `}
                               size={sizeFormat(size)}
                               icon={<Icon
                                   color={styleType === AvatarStyleTypeEnum.solid ? IconColorEnum.light : IconColorEnum.dark}
                               />}
                    />
                    {active && <StatusIcon className={statusIconPosition[borderType][position]}/>}
                </div>
            )
    }

};

export const Avatar = styled(BaseAvatar)(props => {
    switch (props.styleType) {
        case AvatarStyleTypeEnum.simple:
            return css`
              background: rgb(255, 255, 255, 1);
              border: none;
              color: rgba(17, 25, 40, 1);
            `
        case AvatarStyleTypeEnum.outline:
            return css`
              background: rgb(255, 255, 255, 1);
              border: 1px solid rgba(229, 231, 235, 1);
              color: rgba(17, 25, 40, 1);
            `
        case AvatarStyleTypeEnum.soft:
            return css`
              background: rgba(249, 250, 251, 1);
              border: none;
              color: rgba(17, 25, 40, 1);
            `
        case AvatarStyleTypeEnum.solid:
            return css`
              background: rgba(17, 25, 40, 1);
              border: none;
              color: rgb(255, 255, 255, 1);
            `
    }
})

export default Avatar;
