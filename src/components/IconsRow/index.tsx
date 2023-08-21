import React from 'react';
import {IconsRowSize, User} from "../../typings/iconsRow";
import {IconsRowsItem, IconsRowWrapper} from "./style";
import Avatar from "../Avatar";
import {AvatarStyleTypeEnum, AvatarVariantEnum} from "../../typings/avatar";
import {css} from "@emotion/css";
import {sizeFormat} from "../../utils/sizeFormat";


interface IconsRowProps {
    users: User[]
    size: IconsRowSize
    limit?: number
}

const IconsRow: React.FC<IconsRowProps> = ({users, size, limit = 4}) => {
    const formattedArray = users.filter((item, idx) => idx < limit)
    const initials = {
        firstName: '+',
        lastName: String(users.length - 3)
    }
    return (
        <IconsRowWrapper>
            {formattedArray.map((user, idx) => {
                if (users.length > limit && idx === limit -1) {
                    return (
                        <IconsRowsItem className={css`
                          z-index: ${idx};
                          left: ${idx * sizeFormat(size)/2}px;
                          opacity: 1;
                          background: rgba(249, 250, 251, 1);
                          border-radius: 50%;                         
                        `}>
                            <Avatar
                                initials={initials}
                                size={size}
                                variant={AvatarVariantEnum.text}
                                styleType={AvatarStyleTypeEnum.soft}
                                textColor='rgba(88, 80, 236, 1)'
                            />
                        </IconsRowsItem>
                    )
                }
                return (
                    <IconsRowsItem className={css`
                          z-index: ${users.length > limit ? idx : -idx};
                          left: ${idx * sizeFormat(size)/2}px;
                        `}>
                        <Avatar src={user.photo} initials={initials} size={size} variant={AvatarVariantEnum.image}/>
                    </IconsRowsItem>
                )
            })}
        </IconsRowWrapper>
    );
};

export default IconsRow;
