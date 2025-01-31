import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'solar:widget-add-line-duotone',
    route: '/dashboard',
  },
  {
    navCap: 'Pontos de coleta',
    divider: true
  },
  {
    displayName: 'Listar PDC',
    iconName: 'solar:tablet-line-duotone',
    route: '/ui-components/listar-coleta',
  },
  {
    displayName: 'Cadastrar coleta',
    iconName: 'solar:file-text-line-duotone',
    route: '/ui-components/cadastrar-coleta',
  },
  {
    navCap: 'Autenticação',
    divider: true
  },
  {
    displayName: 'Login',
    iconName: 'solar:login-3-line-duotone',
    route: '/authentication/login',
  },
  {
    displayName: 'Registrar',
    iconName: 'solar:user-plus-rounded-line-duotone',
    route: '/authentication/register',
  }
];
