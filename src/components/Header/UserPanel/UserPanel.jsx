import { useState } from 'react';
import { UserInfoModal } from './UserInfoModal';
import { UserLogoutModal } from './UserLogoutModal';
import { UserEditModal } from './UserEditModal';
import { getUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export const UserPanel = () => {
  const [userInfoModal, setUserInfoModal] = useState(false);
  const [userEditModal, setUserEditModal] = useState(false);
  const [userLogoutModal, setUserLogoutModal] = useState(false);

  const { name, avatarUrl } = useSelector(getUser);

  const openModal = modalName => {
    switch (modalName) {
      case 'userInfo':
        setUserInfoModal(true);
        setUserEditModal(false);
        setUserLogoutModal(false);
        break;
      case 'userEdit':
        setUserInfoModal(false);
        setUserEditModal(true);
        setUserLogoutModal(false);
        break;
      case 'userLogout':
        setUserInfoModal(false);
        setUserEditModal(false);
        setUserLogoutModal(true);
        break;
      default:
        return;
    }
  };

  const closeModals = () => {
    setUserInfoModal(false);
    setUserEditModal(false);
    setUserLogoutModal(false);
  };

  const onUserBtnClick = () => openModal('userInfo');
  return (
    <>
      <div className="flex-grow-1 flex justify-end">
        <div
          onClick={onUserBtnClick}
          className="flex items-center cursor-pointer mr-7 md:mr-14"
        >
          <img
            src={avatarUrl}
            alt={`User avatar of ${name}`}
            className="w-[34px] h-[34px] md:w-[44px] md:h-[44px] rounded-full object-cover "
          />
          <p className="ml-[14px] font-main font-semibold text-accentDark dark:text-whiteText text-sm md:text-base">
            {name}
          </p>
        </div>
        <UserInfoModal
          isOpen={userInfoModal}
          handleClose={closeModals}
          handleOpen={openModal}
        />
        <UserLogoutModal
          isOpen={userLogoutModal}
          handleClose={closeModals}
          handleOpen={openModal}
        />
        <UserEditModal
          isOpen={userEditModal}
          handleClose={closeModals}
          handleOpen={openModal}
        />
      </div>
    </>
  );
};
