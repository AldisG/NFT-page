import React, { FC } from 'react';
import { ImSun, BsMoonFill } from '../util/importedIcons';
type Props = {
  theme: string;
  changeTheme: () => void;
};
const LightThemeBtn: FC<Props> = ({ theme, changeTheme }) => {
  return (
    <div
      data-theme={theme}
      className="theme-switch-btn"
      onClick={() => {
        changeTheme();
        console.log(theme);
      }}
    >
      {theme === 'dark' ? (
        <ImSun className="light-th-icn" />
      ) : (
        <BsMoonFill className="dark-th-icn" />
      )}
    </div>
  );
};

export default LightThemeBtn;
