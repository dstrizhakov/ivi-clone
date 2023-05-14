import { renderWithRedux } from '../../src/helpers/renderWithRedux';
import LoginButton from '../../src/components/Profile/LoginButton/LoginButton';
import { fireEvent, screen } from '@testing-library/react';
import AuthModal from '../../src/components/Auth/AuthModal';

describe('login button', () => {
  //todo: fix
  test('login', async () => {
    renderWithRedux(
      <>
        <LoginButton />
        <AuthModal />
      </>
    );
    const button = screen.getByTestId('login-button');
    fireEvent.click(await button);
    await expect(screen.getByText(/войти/gi)).not.toBeNull();
  });
});
