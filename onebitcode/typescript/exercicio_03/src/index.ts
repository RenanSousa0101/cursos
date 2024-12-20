interface User {
    id: number;
    login: string;
    name: string;
    bio: string;
    public_repos: number;
    repos_url: string;
}

interface repository {
    name: string
	description: string
	fork: boolean
	stargazers_count: number
}

let usersGit: User[] = [];
let infoRepository: string = '';

class RepositoryGit implements repository {
    name: string;
    description: string;
    fork: boolean;
    stargazers_count: number;

    constructor(name:string, description:string, fork:boolean, stargazers_count:number){
        this.name = name;
        this.description = description;
        this.fork = fork;
        this.stargazers_count = stargazers_count;
    }

    save(){
        infoRepository += `Nome: ${this.name}\n Descrição: ${this.description}\n Fork: ${this.fork}\n Estrelas: ${this.stargazers_count}\n`
    }
}

class UserGit implements User {

    id: number;
    login: string;
    name: string;
    bio: string;
    public_repos: number;
    repos_url: string;

    constructor(id:number, login:string, name:string, bio:string, public_repos:number, repos_url:string) {
        this.id = id;
        this.login = login;
        this.name = name || "Não informado";;
        this.bio = bio || "Não informado";
        this.public_repos = public_repos;
        this.repos_url = repos_url; 
    }

    save(){
        usersGit.push(this);
    }
}

function addUser(user:User){
    const userData = new UserGit(user.id, user.login, user.name, user.bio, user.public_repos, user.repos_url);
    userData.save();
}

async function getUser(nameUser:string) {
    try{
        const response = await fetch(`https://api.github.com/users/${nameUser}`);
        if(!response.ok){
            return alert(`Usuário ${nameUser} não encontrado!`);
        }
        const dataUser = await response.json();
        addUser(dataUser);
    }catch(error){
        console.error("Erro ao obter usuário:", error.message);
    }
}

function formateObj(obj:repository){
    const objRepo = new RepositoryGit(obj.name, obj.description, obj.fork, obj.stargazers_count);
    objRepo.save();

}

function destrucArray(array:[]){
    array.forEach((elemente) =>{
        const elementRepository = elemente;
        formateObj(elementRepository);
    })
    return infoRepository;
}

async function getRepository(repositoryUrl:string, qtdRep:number) {
    try{
        const response = await fetch(`${repositoryUrl}`);
        if(qtdRep > 0){
            const dataRepository = await response.json();
            destrucArray(dataRepository);
        }else{
            return 'Repositório vazio!'
        }
        
    }catch(error){
        console.error("Erro ao obter usuário:", error.message);
    }
}

function findUser(userName:string){
    const user = usersGit.find((user) => user.login === userName);
    if(user){
        return user;
    }else{
        alert(`Planeta ${userName} não encontrado!`);
        return null;
    }
}

async function UserInfo(user: User) {
    // Aguarda a busca pelos repositórios
    await getRepository(user.repos_url, user.public_repos);

    // Exibe o alerta após os repositórios serem processados
    alert(`ID: ${user.id} 
        Login: ${user.login} 
        Nome: ${user.name} 
        Biografia: ${user.bio} 
        Quantidade de Repositórios: ${user.public_repos} 
        URL: ${user.repos_url}
        Repositórios do Github:
        ${infoRepository}`);
}

function firstMenuOption(){
    const nameUser = prompt('Informe o nome do usuário: ');
    if (nameUser) {
        getUser(nameUser);
    }else {
        console.error("Nome de usuário não informado.");
    }
}

function secondMenuOption(){
    const nameUser = prompt('Informe o nome do usuário: ');
    if (nameUser) {
        const found = findUser(nameUser);
        UserInfo(found);
    }else {
        console.error("Nome de usuário não informado.");
    } 
}

function fourMenuOption(){
    const quantidadeTotal = usersGit.reduce(function (acumulador, user) {
        return acumulador + user.public_repos
    }, 0)

    alert(quantidadeTotal)
}