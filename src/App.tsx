import React from 'react';
import {Avatar} from "./components/Avatar";
import {AvatarBorderTypeEnum, AvatarStyleTypeEnum, AvatarVariantEnum} from "./typings/avatar";
// @ts-ignore
import Photo from './photo.svg'
import {User} from "./typings/iconsRow";
import IconsRow from "./components/IconsRow";

const users:User[] = [
    {
        photo: Photo
    },
    {
        photo: Photo
    },
    {
        photo: Photo
    },
    {
        photo: Photo
    },
    {
        photo: Photo
    },
]

function App() {
  return (
     <>
         <Avatar
             styleType={AvatarStyleTypeEnum.soft}
             variant={AvatarVariantEnum.icon}
             size='xxl'
             src={Photo}
             active={true}
             borderType={AvatarBorderTypeEnum.circle}
             initials={{
                 firstName: 'Iulik',
                 lastName: 'Nicula'
             }}
         />
         <br/>
         <br/>
         <br/>
         <br/>
         <IconsRow users={users} size="lg" />
     </>
  );
}

export default App;
