let userName = prompt("Qual é o seu nome?");
if (!userName) userName = "Usuário";

let visitedPlaces = [];

function showMenu() {
    let menuOption;
    do {
        menuOption = prompt(`${userName}, selecione uma das opções abaixo:\n1 - Adicionar um lugar na lista de lugares visitados\n2 - Remover um lugar da lista de lugares visitados\n3 - Listar todos os lugares visitados\n4 - Mostrar todos os lugares visitados no documento HTML (DOM)\n5 - Sair do menu`);
        
        switch(menuOption) {
            case '1':
                addPlace();
                break;
            case '2':
                removePlace();
                break;
            case '3':
                listPlaces();
                break;
            case '4':
                showPlacesInDOM();
                break;
            case '5':
                alert("Saindo do menu...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (menuOption !== '4' && menuOption !== '5');
}

function addPlace() {
    let newPlace = prompt("Digite o nome do lugar que deseja adicionar:");
    if (newPlace) {
        let confirmAdd = confirm(`Você realmente deseja adicionar "${newPlace}" à lista de lugares visitados?`);
        if (confirmAdd) {
            visitedPlaces.push(newPlace);
            visitedPlaces.sort();
            alert(`${newPlace} foi adicionado à lista.`);
        }
    }
}

function removePlace() {
    if (visitedPlaces.length === 0) {
        alert("Você ainda não adicionou nenhum lugar na lista.");
        return;
    }

    listPlaces();

    let placeToRemove = parseInt(prompt("Digite o número do lugar que deseja remover:"));
    if (!isNaN(placeToRemove) && placeToRemove > 0 && placeToRemove <= visitedPlaces.length) {
        let placeName = visitedPlaces[placeToRemove - 1];
        let confirmRemove = confirm(`Você realmente deseja remover "${placeName}" da lista de lugares visitados?`);
        if (confirmRemove) {
            visitedPlaces.splice(placeToRemove - 1, 1);
            alert(`${placeName} foi removido da lista.`);
        }
    } else {
        alert("Número inválido. Tente novamente.");
    }
}

function listPlaces() {
    if (visitedPlaces.length === 0) {
        alert("Você tem 0 lugares adicionados.");
    } else {
        let placesList = "Lugares visitados:\n";
        visitedPlaces.forEach((place, index) => {
            placesList += `${index + 1} - ${place}\n`;
        });
        alert(placesList);
    }
}

function showPlacesInDOM() {
    if (visitedPlaces.length > 0) {
        const placesListElement = document.getElementById("visited-places-list");
        placesListElement.innerHTML = "";  

        visitedPlaces.forEach(place => {
            let listItem = document.createElement("li");
            listItem.textContent = place;
            placesListElement.appendChild(listItem);
        });
    } else {
        alert("Não há lugares para mostrar no DOM.");
    }
}


showMenu();
