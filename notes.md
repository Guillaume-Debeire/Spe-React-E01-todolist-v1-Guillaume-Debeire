# A propos du déclaratif

On oppose souvent l'appriche déclarative à l'approche impérative.

En impératif on dit toujours qu'on se focalise sur le "comment", c'est à dire comment passer étape par étape d'un point A à un point B

En déclaratif on dit toujours qu'on se focalise sur le "quoi", c'est à dire qu'est-ce qu'on veut faire, la tuyaterie, comment on va le faire sera bien souvent cachée.

En déclaratif, on va gérer un état/state, l'état de l'application. C'est à dire une donnée brute qui fera office de source de vérité pour tout ce qui va s'afficher dans notre interface utilisateur (UI).

**Comment allons-nous travailler en déclaratif ?**

- On va décrire l'état de l'application initial sous forme de donnée brute
- On va décrire comment déterminer l'affichage de nos composants d'interface en fonction de cet état, quel qu'il soit.
- Lorsque l'utilisateur va interagir je pourrais traduire ses intentions en faisnt évoluer l'état de l'application puis en recalculant l'interface pour cet état

**Comparons les 2 approches**

Déclaratif

- Avantages: beaucoup plus évolutif, on limite les effets de bords, ainsi on peut rajouter tout plein de fonctionnalités sans casser l'existant
- Inconvénients: des soucis de performance, on recalcule toute l'interface à chaque modif

Impératif

- Avantages: plus performant car on décrit uniquement ce qui doit changer
- Inconvénients: On a vite fait de perdre le controle de notre code quand on multiplie les fonctionnalités

On garde quoi ? Le meilleur des deux mondes. Il nous faudrait un outil pour faire du déclaratif en restant performant.

**REACT.**
