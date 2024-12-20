var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let usersGit = [];
let infoRepository = '';
class RepositoryGit {
    constructor(name, description, fork, stargazers_count) {
        this.name = name;
        this.description = description;
        this.fork = fork;
        this.stargazers_count = stargazers_count;
    }
    save() {
        infoRepository += `Nome: ${this.name}\n Descrição: ${this.description}\n Fork: ${this.fork}\n Estrelas: ${this.stargazers_count}\n`;
    }
}
class UserGit {
    constructor(id, login, name, bio, public_repos, repos_url) {
        this.id = id;
        this.login = login;
        this.name = name || "Não informado";
        ;
        this.bio = bio || "Não informado";
        this.public_repos = public_repos;
        this.repos_url = repos_url;
    }
    save() {
        usersGit.push(this);
    }
}
function addUser(user) {
    const userData = new UserGit(user.id, user.login, user.name, user.bio, user.public_repos, user.repos_url);
    userData.save();
}
function getUser(nameUser) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://api.github.com/users/${nameUser}`);
            if (!response.ok) {
                return alert(`Usuário ${nameUser} não encontrado!`);
            }
            const dataUser = yield response.json();
            addUser(dataUser);
        }
        catch (error) {
            console.error("Erro ao obter usuário:", error.message);
        }
    });
}
function formateObj(obj) {
    const objRepo = new RepositoryGit(obj.name, obj.description, obj.fork, obj.stargazers_count);
    objRepo.save();
}
function destrucArray(array) {
    array.forEach((elemente) => {
        const elementRepository = elemente;
        formateObj(elementRepository);
    });
    return infoRepository;
}
function getRepository(repositoryUrl, qtdRep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${repositoryUrl}`);
            if (qtdRep > 0) {
                const dataRepository = yield response.json();
                destrucArray(dataRepository);
            }
            else {
                return 'Repositório vazio!';
            }
        }
        catch (error) {
            console.error("Erro ao obter usuário:", error.message);
        }
    });
}
function findUser(userName) {
    const user = usersGit.find((user) => user.login === userName);
    if (user) {
        return user;
    }
    else {
        alert(`Planeta ${userName} não encontrado!`);
        return null;
    }
}
function UserInfo(user) {
    return __awaiter(this, void 0, void 0, function* () {
        // Aguarda a busca pelos repositórios
        yield getRepository(user.repos_url, user.public_repos);
        // Exibe o alerta após os repositórios serem processados
        alert(`ID: ${user.id} 
           Login: ${user.login} 
           Nome: ${user.name} 
           Biografia: ${user.bio} 
           Quantidade de Repositórios: ${user.public_repos} 
           URL: ${user.repos_url}
           Repositórios do Github:
           ${infoRepository}`);
    });
}
function firstMenuOption() {
    const nameUser = prompt('Informe o nome do usuário: ');
    if (nameUser) {
        getUser(nameUser);
    }
    else {
        console.error("Nome de usuário não informado.");
    }
}
function secondMenuOption() {
    const nameUser = prompt('Informe o nome do usuário: ');
    if (nameUser) {
        const found = findUser(nameUser);
        UserInfo(found);
    }
    else {
        console.error("Nome de usuário não informado.");
    }
}
function fourMenuOption() {
    const quantidadeTotal = usersGit.reduce(function (acumulador, user) {
        return acumulador + user.public_repos;
    }, 0);
    alert(quantidadeTotal);
}
