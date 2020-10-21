function exibirhab(usuarios) {
  for(usuario of usuarios){
    console.log(`o ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(" - ")}`)
  }
}

var usuarios = [
  {
  nome: "Diego",
  habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
  nome: "Gabriel",
  habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
 ];

 exibirhab(usuarios)