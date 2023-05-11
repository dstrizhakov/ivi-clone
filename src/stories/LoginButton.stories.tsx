import { Meta, StoryObj } from '@storybook/react';
import LoginButton from '@/components/Profile/LoginButton/LoginButton';
import AuthModal from '@/components/Auth/AuthModal';

const LoginWrapper = () => {
  return (
    <>
      <LoginButton />
      <AuthModal />
    </>
  );
};

const meta: Meta<typeof LoginButton> = {
  title: 'Main/Profile',
  component: LoginWrapper,
};

export default meta;

type Story = StoryObj<typeof LoginButton>;

export const Login: Story = {
  args: {},
};
