1. En pantallas grandes (md en adelante), el navbar muestra enlaces normales (ul md:flex).

2. En móviles (md:hidden), se muestra un botón hamburguesa (☰).

3. Si el usuario hace clic en el botón:

   -Si el menú está cerrado (menuOpen = false), se abre (menuOpen = true).
   -Si el menú está abierto (menuOpen = true), se cierra (menuOpen = false).

4. Cuando el menú está abierto, aparece un menú desplegable (ul md:hidden).

5. Al hacer clic en un enlace, el menú se cierra automáticamente.