//para actualizar repositorio locar por git de github

git pull

con git log // miramos lo q se a cargado nuevo

//para cargar de local a github

    //creamos una rama
      git checkout -b "nombre de la rama"

    git add --all
    git commit -m "mensaje para githib"

    // estos cambios estan en la rama creada, toca subir los cambios a github

    git push origin "nombre de la rama"
    

// para empujar codigo existente a un repositorio en Git hub

git add . //agrega los archivos de la carpeta actual al repositorio

git commit -m "mensaje para github"// para generar cambios sobre la version antigua

git remote -v
git push// envia cambios al repositorio remoto


// CLONAR REPOSITORIO DE HUB A LOCAL
git clone (enlace copiado del repositorio)

// SUBIR CARPETA LOCAL A NUEVO REPOSITORIO

echo "# NOMBRE EN EL README" >> README.md
git init
git add README.md
git commit -m "MENSAJE"
git branch -M main
git remote add origin https://github.com/URL DEL REPOSITORIO
git push -u origin main

