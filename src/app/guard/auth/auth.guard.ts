import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../../service/auth/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  // Injecter le service Router pour la navigation
  const router = inject(Router);

  // Injecter le service AuthService pour vérifier l'état de connexion
  const authService = inject(AuthService);

  // Vérifier si un jeton d'authentification est disponible
  if (!authService.token) {
    // S'il n'y a pas de jeton, rediriger vers la page de connexion
    return router.navigateByUrl('/connexion');
  }

  // Si un jeton est disponible, autoriser l'accès à la route
  return true;

};
