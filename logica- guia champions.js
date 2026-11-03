
let Venusaur = {
    "nome": "Venusaur",

    "Tipo 1": "GRASS",
	"Tipo 2": "POISON",

    "HP": 80,
	"DescriçãoHP": "Bom",
	"Ataque Físico": 82,
	"DescriçãoAF": "Ok",
	"Defesa Física" : 83,
	"DescriçãoDF" : "Ok",
	"Ataque Especial" : 100,
	"DescriçãoAE": "Ótimo",
	"Defesa Especial" : 100,
	"DescriçãoDE": "Ótimo",
	"Velocidade" : 80,
	"DescriçãoV": "Ok",

    "Habilidade 1": "Overgrow",
    "DescriçãoH1": "Aumenta o poder de golpes do tipo GRASS por 50% quando o usuário está com menos de um terço de seu HP total",
	"Habilidade 2": " ",
    "DescriçãoH2": " ",

    "Resistências" : ["WATER", "ELECTRIC", "GRASS", "FIGHTING"],
	"Fraquezas" : ["FIRE", "FLYING", "PSYCHIC", "ICE"],
	"Imunidades": [" "],

    "Level up": [
        ["1", "Tackle", "Físico", "NORMAL", "35", "95%", "Causa dano sem efeito adicional"], 
        ["4", "Growl", "Status", "NORMAL", " – ", "100%", "Diminui o Ataque Físico do alvo por 1 estágio"], 
        ["7", "Leech Seed", "Status", "GRASS", " – ", "90%", "Planta uma semente no alvo que suga um oitavo de seu HP máximo ao final de cada turno e cura o usuário"], 
        ["10", "Vine Whip", "Especial", "GRASS", "35", "100%", "Causa dano sem efeito adicional"], 
        ["15", "Poison Powder", "Status", "POISON", " – ", "75%", "Causa a condição de POISONED ao alvo."], 
        ["15", "Sleep Powder", "Status", "GRASS", " – ", "75%", "Causa a condição de SLEEP ao alvo."], 
        ["22", "Razor Leaf", "Especial", "GRASS", "55", "95%", "Causa dano e tem chance aumentada de um golpe crítico"], 
        ["29", "Sweet Scent", "Status", "NORMAL", " – ", "100%", "Diminui a Evasão do alvo por 1 estágio"], 
        ["41", "Growth", "Status", "NORMAL", " – ", "∞", "Aumenta o Ataque Especial do usuário por 1 estágio"], 
        ["53", "Synthesis", "Status", "GRASS", " – ", "∞", "Usuário recupera HP, mais efetivo com o clima de HARSH SUNLIGHT"], 
        ["65", "Solar Beam", "Especial", "GRASS", "120", "100%", "O usuário carrega o golpe por 1 turno e ataca no próximo turno, causando dano. Durante o clima de HARSH SUNLIGHT o usuário não precisa carregar o golpe antes de atacar"]
    ],
    "MT":[
        ["Double Edge", "Físico", "NORMAL", "120", "100%", "Causa dano, porém o usuário recebe um terço do dano causado como efeito colateral"], 
        ["Mimic", "Status", "NORMAL", " – ", "∞", "Mimic copia o último golpe usado pelo oponente, golpe este substitui o lugar de Mimic. Ao trocar de pokémon ou ao fim de uma batalha o golpe volta a ser Mimic"], 
        ["Substitute", "Status", "NORMAL", " – ", "∞", "Sacrifica um quarto de seu HP máximo para criar uma distração que recebe golpes pelo usuário. Tal distração se quebra após receber dano equivalente ao HP usado em sua criação. Tal distração não pode ser afetada por golpes de status e protege seu usuário enquanto ativa"]
    ],
    "HM":[
        ["Cut", "Físico", "NORMAL", "50", "95%", "Causa dano sem efeito adicional em batalha. Fora de batalha corta árvores específicas que bloqueiam caminhos"], 
        ["Strength", "Físico", "NORMAL", "80", "100%", "Causa dano sem efeito adicional em batalha. Fora de batalha é usado para empurrar grandes pedras que bloqueiam caminhos"], 
        ["Flash", "Status", "NORMAL", " – ", "70%", "Diminui a Precisão do alvo por 1 estágio em batalha. Fora de batalha é usado para iluminar cavernas escuras"], 
        ["Rock Smash", "Físico", "FIGHTING", "20", "100%", "Causa dano e tem 50% de chance de diminuir a Defesa Física do alvo por 1 estágio em batalha. Fora de batalha é usado para quebrar pedras pequenas que bloqueiam caminhos"]
    ],
    "TM":[
        ["Roar", "Status", "NORMAL", " – ", "100%", "Força o alvo a sair do campo de batalha, sendo substituído por outro Pokemon no time do oponente"],
        ["Toxic", "Status", "POISON", " – ", "85%", "Causa a condição de BADLY POISONED ao alvo."],
        ["Bullet Seed", "Especial", "GRASS", "10", "100%", "Atinge o alvo de 2 a 5 vezes, causando dano. A probabilidade de acertar cada vez decai exponencialmente"], 
        ["Hidden Power", "Físico - Especial", "???", "30 - 70", "100%", "Causa dano, porém o seu tipo e poder base são determinados por valores individuais de cada Pokemon, sendo essencialmente aleatório"],
        ["Sunny Day", "Status", "FIRE", " – ", "∞",  "Ativa a condição de HARSH SUNLIGHT no campo por 5 turnos, aumentando o poder de golpes de FIRE por 50% e diminuindo o poder de golpes de WATER por 50%, além de outros efeitos"], 
        ["Hyper Beam", "Físico", "NORMAL", "150", "90%", "Causa dano, mas o usuário deverá passar o próximo turno sem se mover"],
        ["Protect", "Status", "NORMAL", " – ", "∞", "Protege o usuário de qualquer golpe direcionado a ele por 1 turno (possui prioridade nesse turno). A probabilidade de acerto decai severamente caso usado em 2 ou mais turnos consecutivos"],
        ["Giga Drain", "Especial", "GRASS", "60", "100%", "Causa dano e o usuário recupera HP equivalente a 50% do dano causado"],
        ["Frustration", "Físico", "NORMAL", "1 - 102", "100%", "Seu poder aumenta quanto menor o valor de amizade do Pokemon (amizade aumenta conforme caminha, batalha, sobe de nível entre outros)"],
        ["Solar Beam", "Especial", "GRASS", "120", "100%", "O usuário carrega o golpe por 1 turno e ataca no próximo turno, causando dano. Durante o clima de HARSH SUNLIGHT o usuário não precisa carregar o golpe antes de atacar"],
        ["Earthquake", "Físico", "GROUND", "100", "100%", "Causa dano, pode atingir Pokemon que estão invulneráveis no turno ao usarem o golpe “Dig”"],
        ["Return", "Físico", "NORMAL", "1 - 102", "100%", "Seu poder aumenta quanto maior o valor de amizade do Pokemon (amizade aumenta conforme caminha, batalha, sobe de nível entre outros)"],
        ["Double Team", "Status", "NORMAL", " – ", "∞", "Aumenta a Evasão do usuário por 1 estágio"],
        ["Sludge Bomb", "Físico", "POISON", "90", "100%", "Causa dano e possui 30% de chance de causar a condição de POISONED no alvo"],
        ["Facade", "Físico", "NORMAL", "70", "100%", "Causa dano. Possui seu poder dobrado se o usuário estiver com uma condição de status como POISONED, PARALYZED ou BURNED"],
        ["Secret Power", "Físico", "NORMAL", "70", "100%", "Causa dano e possui 30% de chance de causar um  efeito secundário ao alvo, o efeito depende do terreno em que a batalha se encontra"],
        ["Rest", "Status", "PSYCHIC", " – ", "∞", "O usuário adquire a condição de SLEEP por 2 turnos, em troca possui seu HP totalmente recuperado"],
        ["Attract", "Status", "NORMAL", " – ", "100%", "Causa Pokemon do gênero oposto ao do usuário a adquirirem a condição de status de INFATUATED. Pokemon com essa condição possuem 50% de chance de serem impossibilitados de se mexerem todo turno. Pokemon do mesmo gênero do usuário ou Pokemon sem gênero não são afetados"]
    ],

    "Encounter":[["PALLET TOWN", "Escolha de seu STARTER (Primeiro Pokemon / Pokemon inicial)"]],

    "gym1" : "Útil",
    "gym2" : "Útil",
    "gym3" : "Útil" ,
    "gym4" : "Neutro",
    "gym5" : "Neutro",
    "gym6" : "Ruim",
    "gym7" : "Ruim",
    "gym8" : "Útil",

    "Review":"É o melhor Pokemon inicial para jogadores experientes, que possuem problemas no começo do jogo ou que preferem um estilo de jogo mais focado em suporte. A linha evolutiva do Venusaur possui o melhor early game dos três iniciais disponíveis, tendo vantagem ofensiva (Super efetividade) contra os 2 primeiros Ginásios do jogo, e vantagem defensiva (Resistência) ao 3° e 4° ginásio, além de ser imune a condição POISONED, o que ajuda no 5° ginásio, mesmo que sua capacidade ofensiva decaia ao decorrer do jogo, seu nicho se mantém com incríveis golpes de status, com acesso a Leech Seed, Sleep Powder e Poison Powder cedo, e possuindo a possibilidade de utilizar Sunny Day e Solar Beam para dano massivo e até opções para cura. No late game ajuda contra o 8° Ginásio e consegue ser bem útil na Liga Pokemon. Sendo um inicial é acessível desde o começo do jogo e é uma ótima opção para um bom Nuzlocke.",
    "Rank":"A (Ótimo)"
}
  

let Charizard = {
    "nome": "Charizard",

    "Tipo 1": "FIRE",
	  "Tipo 2": "FLYING",

    "HP": 78,
	  "DescriçãoHP": "Ok",
	  "Ataque Físico": 84,
	  "DescriçãoAF": "Ok",
	  "Defesa Física" : 78,
	  "DescriçãoDF" : "Medíocre",
	  "Ataque Especial" : 109,
	  "DescriçãoAE": "Ótimo",
	  "Defesa Especial" : 85,
	  "DescriçãoDE": "Bom",
	  "Velocidade" : 100,
	  "DescriçãoV": "Ótimo",

    "Habilidade 1": "Blaze",
    "DescriçãoH1": "Aumenta o poder de golpes do tipo FIRE por 50% quando o usuário está com menos de um terço de seu HP total",
	  "Habilidade 2": " ",
    "DescriçãoH2": " ",

    "Resistências" : ["FIRE", "BUG", "GRASS", "FIGHTING","STEEL"],
	  "Fraquezas" : ["WATER", "ELECTRIC", "!!ROCK!!"],
	  "Imunidades": ["GROUND"],

    "Level up": [
        ["Nível 1", "Growl", "Status", "NORMAL", " – ", "100%", "Diminui o Ataque Físico do alvo por 1 estágio"],
        ["Nível 1", "Scratch", "Físico", "NORMAL", "40", "100%", "Causa dano sem efeito adicional"],
        ["Nível 7", "Ember", "Especial", "FIRE", "40", "100%", "Causa dano. Possui 10% de chance de causar o status de BURNED ao alvo"],
        ["Nível 13", "Metal Claw", "Físico", "STEEL", "50", "95%", "Causa dano. Possui 10% de chance de aumentar o Ataque Físico do usuário por 1 estágio"],
        ["Nível 20", "Smoke Screen", "Status", "NORMAL", " – ", "100%", "Diminui a precisão do alvo por 1 estágio"],
        ["Nível 27", "Scary Face", "Status", "NORMAL", " – ", "90%", "Diminui a Velocidade do alvo por 2 estágios"],
        ["Nível 34", "Flamethrower", "Especial", "FIRE", "95", "100%", "Causa dano. Possui 10% de chance de causar o status de BURNED ao alvo"],
        ["Nível 36", "Wing Attack", "Físico", "FLYING", "60", "100%", "Causa dano sem efeito adicional"],
        ["Nível 44", "Slash", "Físico", "NORMAL", "70", "100%", "Causa dano e tem chance aumentada de um golpe crítico"],
        ["Nível 54", "Dragon Rage", "Especial", "DRAGON", " – ", "100%", "O golpe sempre causa dano de 40 de HP ao alvo, independente de tipo. Não possui efeito secundário"],
        ["Nível 64", "Fire Spin", "Especial", "FIRE", "15", "70%", "Causa dano no primeiro turno e prende o alvo em campo, o efeito dura de 2 a 5 turnos. O alvo perde 1/16 de seu HP total a cada turno preso"]

    ],
    "MT":[
        ["Counter", "Físico", "FIGHTING", " – ", "100%", "Quando o usuário é atingido por um ataque físico logo após utilizar o golpe, causa o dobro do dano recebido ao alvo"],
        ["Double Edge", "Físico", "NORMAL", "120", "100%", "Causa dano, porém o usuário recebe um terço do dano causado como efeito colateral"],
        ["Mega Kick", "Físico", "NORMAL", "120", "75%", "Causa dano sem efeito adicional"],
        ["Mega Punch", "Físico", "NORMAL", "80", "85%", "Causa dano sem efeito adicional"],
        ["Mimic", "Status", "NORMAL", " – ", "∞", "Mimic copia o último golpe usado pelo oponente, golpe este substitui o lugar de Mimic. Ao trocar de pokémon ou ao fim de uma batalha o golpe volta a ser Mimic"],
        ["Rock Slide", "Físico", "ROCK", "75", "90%", "Causa dano. Possui 30% de chance de fazer o alvo sofrer um FLINCH ( não atacar por este turno caso ainda não tenha atacado )"],
        ["Seismic Toss", "Físico", "FIGHTING", " – ", "100%", "Causa a quantidade de dano referente ao nível do usuário (Um Pokemon de nível 100 causa dano de 100 de HP ao alvo)"],
        ["Substitute", "Status", "NORMAL", " – ", "∞", "Sacrifica um quarto de seu HP máximo para criar uma distração que recebe golpes pelo usuário. Tal distração se quebra após receber dano equivalente ao HP usado em sua criação. Tal distração não pode ser afetada por golpes de status e protege seu usuário enquanto ativa"]
    ],
    "HM":[
        ["Cut", "Físico", "NORMAL", "50", "95%", "Causa dano sem efeito adicional em batalha. Fora de batalha corta árvores específicas que bloqueiam caminhos"],
        ["Fly", "Físico", "FLYING", "70", "95%", "O usuário se torna invulnerável no primeiro turno, causando dano no segundo turno em batalha. Fora de batalha é usado para poder voar instantaneamente para qualquer Centro Pokemon ou pontos importantes visitados anteriormente, desde que o jogador não se encontre em um ambiente fechado"],
        ["Strength", "Físico", "NORMAL", "80", "100%", "Causa dano sem efeito adicional em batalha. Fora de batalha é usado para empurrar grandes pedras que bloqueiam caminhos"],
        ["Rock Smash", "Físico", "FIGHTING", "20", "100%", "Causa dano e tem 50% de chance de diminuir a Defesa Física do alvo por 1 estágio em batalha. Fora de batalha é usado para quebrar pedras pequenas que bloqueiam caminhos"]
    ],
    "TM":[
        ["Focus Punch", "Físico", "FIGHTING", "150", "100%", "O usuário começa a carregar seu golpe no começo do turno, caso seja atingido por um ataque direto neste turno, o golpe não será realizado"],
	      ["Dragon Claw", "Especial", "DRAGON", "80", "100%", "Causa dano sem efeito adicional"],
	      ["Roar", "Status", "NORMAL", " – ", "100%", "Força o alvo a sair do campo de batalha, sendo substituído por outro Pokemon no time do oponente"],
        ["Toxic", "Status", "POISON", " – ", "85%", "Causa a condição de BADLY POISONED ao alvo. Pokemon com essa condição perdem uma quantidade de seu HP máximo a todo turno, quantidade essa que aumenta exponencialmente a cada turno que o Pokemon permanece em campo"],
	      ["Hidden Power", "Físico - Especial", "???", "30 - 70", "100%", "Causa dano, porém o seu tipo e poder base são determinados por valores individuais de cada Pokemon, sendo essencialmente aleatório"],
        ["Sunny Day", "Status", "FIRE", " – ", "∞",  "Ativa a condição de HARSH SUNLIGHT no campo por 5 turnos, aumentando o poder de golpes de FIRE por 50% e diminuindo o poder de golpes de WATER por 50%, além de outros efeitos"], 
        ["Hyper Beam", "Físico", "NORMAL", "150", "90%", "Causa dano, mas o usuário deverá passar o próximo turno sem se mover"],
        ["Protect", "Status", "NORMAL", " – ", "∞", "Protege o usuário de qualquer golpe direcionado a ele por 1 turno (possui prioridade nesse turno). A probabilidade de acerto decai severamente caso usado em 2 ou mais turnos consecutivos"],
	      ["Frustration", "Físico", "NORMAL", "1 - 102", "100%", "Seu poder aumenta quanto menor o valor de amizade do Pokemon (amizade aumenta conforme caminha, batalha, sobe de nível entre outros)"],
	      ["Iron Tail", "Físico", "STEEL", "100", "75%", "Causa dano. Possui 30% de chance de diminuir a Defesa Física do alvo por 1 estágio"],
	      ["Earthquake", "Físico", "GROUND", "100", "100%", "Causa dano, pode atingir Pokemon que estão invulneráveis no turno ao usarem o golpe Dig"],
        ["Return", "Físico", "NORMAL", "1 - 102", "100%", "Seu poder aumenta quanto maior o valor de amizade do Pokemon (amizade aumenta conforme caminha, batalha, sobe de nível entre outros)"],
        ["Dig", "Físico", "GROUND", "60", "100%", "O usuário se torna invulnerável no primeiro turno, causando dano no segundo turno"],
        ["Brick Break", "Físico", "FIGHTING", "75", "100%", "Causa dano. Caso o oponente tenha ativado o efeito de REFLECT ou LIGHT SCREEN, o golpe removerá este efeito"],
	      ["Double Team", "Status", "NORMAL", " – ", "∞", "Aumenta a Evasão do usuário por 1 estágio"],
	      ["Flamethrower", "Especial", "FIRE", "95", "100%", "Causa dano. Possui 10% de chance de causar o status de BURNED ao alvo"],
	      ["Fire Blast", "Especial", "FIRE", "120", "85%", "Causa dano. Possui 10% de chance de causar o status de BURNED ao alvo"],
        ["Aerial Ace", "Físico", "FLYING", "60", "∞", "Causa dano sem efeito adicional"],
	      ["Facade", "Físico", "NORMAL", "70", "100%", "Causa dano. Possui seu poder dobrado se o usuário estiver com uma condição de status como POISONED, PARALYZED ou BURNED"],
        ["Secret Power", "Físico", "NORMAL", "70", "100%", "Causa dano e possui 30% de chance de causar um  efeito secundário ao alvo, o efeito depende do terreno em que a batalha se encontra"],
        ["Rest", "Status", "PSYCHIC", " – ", "∞", "O usuário adquire a condição de SLEEP por 2 turnos, em troca possui seu HP totalmente recuperado"],
        ["Attract", "Status", "NORMAL", " – ", "100%", "Causa Pokemon do gênero oposto ao do usuário a adquirirem a condição de status de INFATUATED. Pokemon com essa condição possuem 50% de chance de serem impossibilitados de se mexerem todo turno. Pokemon do mesmo gênero do usuário ou Pokemon sem gênero não são afetados"],
	      ["Steel Wing", "Físico", "STEEL", "70", "90%", "Causa dano. Possui 10% de chance de aumentar a Defesa Física do usuário por 1 estágio"],
	      ["Overheat", "Especial", "FIRE", "140", "90%", "Causa dano. Porém diminui o Ataque Especial do usuário por 2 estágios após seu uso"]
    ],

    "Encounter":[["PALLET TOWN", "Escolha de seu STARTER (Primeiro Pokemon / Pokemon inicial)"]],

    "gym1": "Ruim",
    "gym2": "Ruim",
    "gym3": "Neutro" ,
    "gym4": "Útil",
    "gym5": "Neutro",
    "gym6": "Neutro",
    "gym7": "Neutro",
    "gym8": "Ruim",

    "Review":"É o pior Pokemon inicial entre os três disponíveis, escolhê-lo o impede de escolher Venusaur ou Blastoise em troca de receber um Pokemon que apesar de não possuir stats ruins, não possui quase nenhuma vantagem significativa ao decorrer do jogo, tendo fraquezas contra os 2 primeiros ginásios, justo o momento do jogo em que você possui a menor quantidade de opções de Pokemon para seu time, além disso não possui uma utilidade significativa na Liga Pokemon. Seu moveset é ok mas nada absurdo, com uma alta quantidade de golpes físicos que não aproveitam de seu alto Ataque Especial. Você está tornando seu desafio mais difícil ao escolher Charizard e está se privando de opções melhores, mas caso deseje ainda é um Pokemon utilizável.",
    "Rank":"C (Medíocre)"
}


let  Blastoise = {
    "nome": "Blastoise",

    "Tipo 1": "WATER",
    "Tipo 2": "  ",


    "HP":79 ,
    "DescriçãoHP": "Bom",
    "Ataque Físico":83,
    "DescriçãoAF": "Ok",
    "Defesa Física": 100,
    "DescriçãoDF" : "Otimo",
    "Ataque Especial": 85,
    "DescriçãoAE": "Ok",
    "Defesa Especial":105 ,
    "DescriçãoDE": "Ótimo",
    "Velocidade" :78 ,
    "DescriçãoV": "Ok",


    "Habilidade 1": "Torrent",
    "DescriçãoH1": "Aumenta o poder de golpes do tipo WATER por 50% quando o usuário está com menos de um terço de seu HP total",
    "Habilidade 2": " ",
    "DescriçãoH2": " ",


    "Resistências" : ["WATER", "FIRE", "ICE", "STEEL"],
    "Fraquezas" : ["ELECTRIC", "GRASS"],
    "Imunidades": [" "],


    "Level up": [
        ["Nível 1", "Tackle", "Físico", "NORMAL", "35", "95%", "Causa dano sem efeito adicional"],
        ["Nível 4", "Tail Whip", "Status", "NORMAL", " – ", "100%", "Diminui o Defesa Física do alvo por 1 estágio"],
        ["Nível 7", "Bubble", "Especial", "WATER", "20", "100%", "Causa dano. Possui 10% de chance de diminuir a velocidade do alvo em 1 estágio"],
        ["Nível 10", "Withdraw", "Status", "WATER", " – ", "∞", "Aumenta a Defesa Física do usuário em 1 estágio"],
        ["Nível 13", "Water Gun", "Especial", "WATER", "40", "100%", "Causa dano sem efeito adicional"],
        ["Nível 19", "Bite", "Especial", "DARK", "60", "100%", "Causa dano e possui 30% de chance de impedir o alvo de se mover(caso ele ainda não tenha se movido)"],
        ["Nível 25", "Rapid Spin", "Físico", "NORMAL", "20", "100%", "Causa dano e retira efeitos conhecidos como armadilhas do seu campo (Spikes, Toxic Spikes, Stealth Rock)"],
        ["Nível 31", "Protect", "Status", "NORMAL", " – ", "∞", "Protege o usuário de qualquer golpe direcionado a ele por 1 turno (possui prioridade nesse turno). A probabilidade de acerto decai severamente caso usado em 2 ou mais turnos consecutivos"],
        ["Nível 42", "Rain Dance", "Status", "WATER", " – ", "∞", "Ativa a condição de RAIN no campo por 5 turnos, aumentando o poder de golpes de WATER por 50% e diminuindo o poder de golpes de FIRE por 50%, além de outros efeitos"],
        ["Nível 55", "Skull Bash", "Físico", "NORMAL", "100", "100%", "O usuário carrega o golpe por 1 turno e aumenta sua Defesa Física, causando dano no próximo turno"],
        ["Nível 68", "Hydro Pump", "Especial", "WATER", "120", "80%", "Causa dano sem efeito adicional"]
    ],
    "MT":[
        ["Counter", "Físico", "FIGHTING", " – ", "100%", "Quando o usuário é atingido por um ataque físico logo após utilizar o golpe, causa o dobro do dano recebido ao alvo"],
        ["Double Edge", "Físico", "NORMAL", "120", "100%", "Causa dano, porém o usuário recebe um terço do dano causado como efeito colateral"],
        ["Mega Kick", "Físico", "NORMAL", "120", "75%", "Causa dano sem efeito adicional"],
        ["Mega Punch", "Físico", "NORMAL", "80", "85%", "Causa dano sem efeito adicional"],
        ["Mimic", "Status", "NORMAL", " – ", "∞", "Mimic copia o último golpe usado pelo oponente, golpe este substitui o lugar de Mimic. Ao trocar de pokémon ou ao fim de uma batalha o golpe volta a ser Mimic"],
        ["Seismic Toss", "Físico", "FIGHTING", " – ", "100%", "Causa a quantidade de dano referente ao nível do usuário (Um Pokemon de nível 100 causa dano de 100 de HP ao alvo)"],
        ["Substitute", "Status", "NORMAL", " – ", "∞", "Sacrifica um quarto de seu HP máximo para criar uma distração que recebe golpes pelo usuário. Tal distração se quebra após receber dano equivalente ao HP usado em sua criação. Tal distração não pode ser afetada por golpes de status e protege seu usuário enquanto ativa"]
    ],
    "HM":[
        ["Surf", "Especial", "WATER", "95", "100%", "Causa dano. Em batalhas em dupla, atinge ambos os oponentes. Fora de batalha é usado para se locomover por áreas aquáticas. Pode atingir Pokemon que estão invulneráveis no turno ao usarem o golpe Dive"],
        ["Strength", "Físico", "NORMAL", "80", "100%", "Causa dano sem efeito adicional em batalha. Fora de batalha é usado para empurrar grandes pedras que bloqueiam caminhos"],
        ["Rock Smash", "Físico", "FIGHTING", "20", "100%", "Causa dano e tem 50% de chance de diminuir a Defesa Física do alvo por 1 estágio em batalha. Fora de batalha é usado para quebrar pedras pequenas que bloqueiam caminhos"],
        ["Waterfall", "Especial", "WATER", "80", "100%", "Causa dano e possui 20% de chance de impedir o alvo de se mover(caso ele ainda não tenha se movido)"],
        ["Dive", "Especial", "WATER", "60", "100%", "O usuário se torna invulnerável no primeiro turno, causando dano no segundo turno"]
    ],
    "TM":[
        ["Focus Punch", "Físico", "FIGHTING", "150", "100%", "O usuário começa a carregar seu golpe no começo do turno, caso seja atingido por um ataque direto neste turno, o golpe não será realizado"],
        ["Water Pulse", "Especial", "WATER", "60", "100%", "Causa dano e possui 20% de chance de causar o status de CONFUSED ao alvo"],
        ["Roar", "Status", "NORMAL", " – ", "100%", "Força o alvo a sair do campo de batalha, sendo substituído por outro Pokemon no time do oponente"],
        ["Toxic", "Status", "POISON", " – ", "85%", "Causa a condição de BADLY POISONED ao alvo. Pokemon com essa condição perdem uma quantidade de seu HP máximo a todo turno, quantidade essa que aumenta exponencialmente a cada turno que o Pokemon permanece em campo"],
        ["Hail", "Status", "ICE", " – ", "∞", "Ativa a condição de HAIL no campo por 5 turnos, todos os Pokemon que não possuem o tipo ICE perdem 1/16 de sua vida máxima todo turno que a HAIL estiver ativa, além de outros efeitos"],
        ["Hidden Power", "Físico - Especial", "???", "30 - 70", "100%", "Causa dano, porém o seu tipo e poder base são determinados por valores individuais de cada Pokemon, sendo essencialmente aleatório"],
        ["Ice Beam", "Especial", "ICE", "95", "100%", "Causa dano. Possui 10% de chance de causar o status de FREEZED ao alvo"],
        ["Blizzard", "Especial", "ICE", "120", "70%", "Causa dano. Possui 10% de chance de causar o status de FREEZED ao alvo. Em uma batalha em dupla, atinge ambos os oponentes. Sempre acerta quando usado em clima de HAIL"],
        ["Hyper Beam", "Físico", "NORMAL", "150", "90%", "Causa dano, mas o usuário deverá passar o próximo turno sem se mover"],
        ["Protect", "Status", "NORMAL", " – ", "∞", "Protege o usuário de qualquer golpe direcionado a ele por 1 turno (possui prioridade nesse turno). A probabilidade de acerto decai severamente caso usado em 2 ou mais turnos consecutivos"],
        ["Rain Dance", "Status", "WATER", " – ", "∞", "Ativa a condição de RAIN no campo por 5 turnos, aumentando o poder de golpes de WATER por 50% e diminuindo o poder de golpes de FIRE por 50%, além de outros efeitos"],
        ["Frustration", "Físico", "NORMAL", "1 - 102", "100%", "Seu poder aumenta quanto menor o valor de amizade do Pokemon (amizade aumenta conforme caminha, batalha, sobe de nível entre outros)"],
	      ["Iron Tail", "Físico", "STEEL", "100", "75%", "Causa dano. Possui 30% de chance de diminuir a Defesa Física do alvo por 1 estágio"],
	      ["Earthquake", "Físico", "GROUND", "100", "100%", "Causa dano, pode atingir Pokemon que estão invulneráveis no turno ao usarem o golpe Dig"],
        ["Return", "Físico", "NORMAL", "1 - 102", "100%", "Seu poder aumenta quanto maior o valor de amizade do Pokemon (amizade aumenta conforme caminha, batalha, sobe de nível entre outros)"],
        ["Dig", "Físico", "GROUND", "60", "100%", "O usuário se torna invulnerável no primeiro turno, causando dano no segundo turno"],
        ["Brick Break", "Físico", "FIGHTING", "75", "100%", "Causa dano. Caso o oponente tenha ativado o efeito de REFLECT ou LIGHT SCREEN, o golpe removerá este efeito"],
	      ["Double Team", "Status", "NORMAL", " – ", "∞", "Aumenta a Evasão do usuário por 1 estágio"],
        ["Facade", "Físico", "NORMAL", "70", "100%", "Causa dano. Possui seu poder dobrado se o usuário estiver com uma condição de status como POISONED, PARALYZED ou BURNED"],
        ["Secret Power", "Físico", "NORMAL", "70", "100%", "Causa dano e possui 30% de chance de causar um  efeito secundário ao alvo, o efeito depende do terreno em que a batalha se encontra"],
        ["Rest", "Status", "PSYCHIC", " – ", "∞", "O usuário adquire a condição de SLEEP por 2 turnos, em troca possui seu HP totalmente recuperado"],
        ["Attract", "Status", "NORMAL", " – ", "100%", "Causa Pokemon do gênero oposto ao do usuário a adquirirem a condição de status de INFATUATED. Pokemon com essa condição possuem 50% de chance de serem impossibilitados de se mexerem todo turno. Pokemon do mesmo gênero do usuário ou Pokemon sem gênero não são afetados"]
    ],


    "Encounter":[["PALLET TOWN", "Escolha de seu STARTER (Primeiro Pokemon / Pokemon inicial)"]],


    "gym1": "Útil",
    "gym2": "Útil",
    "gym3": "Ruim" ,
    "gym4": "Ruim",
    "gym5": "Neutro",
    "gym6": "Neutro",
    "gym7": "Útil",
    "gym8": "Útil",


    "Review":"É o melhor inicial para jogadores mais inexperientes ou que planejam que seu inicial seja um bom atacante no late game. Possui uma ótima movepool, com acesso a Bite, Water Pulse e Dig, além de Surf, Ice Beam e até Earthquake e Toxic para o late game. Possui vantagem ao primeiro e resistência ao segundo ginásio, não sendo recomendado para o 3º ou 4º ginásio, porém retorna a ser viável ao 5º até o fim do jogo, com seu perfil de ser um tipo WATER com boas defesas, tendo excelente cobertura com golpes ICE além disso. O tornando uma ótima opção caso não deseje Venusaur e precisa de consistência no final da jornada.",
    "Rank":"A (Ótimo)"
}

/* const elementoPokemon = document.querySelector("#pagina-pokemon");

if (elementoPokemon) {
  const pokemonSelecionado = pokemons[elementoPokemon.dataset.pokemon];
  const grafico = elementoPokemon.querySelector("#grafico");
  const destino = elementoPokemon.querySelector("#tabelas-golpes");

  if (pokemonSelecionado && grafico && destino) {
    renderizarPokemon(pokemonSelecionado, grafico, destino);
  } else {
    console.error("Confira o data-pokemon e os elementos #grafico e #tabelas-golpes.");
  }
}
  
  const grafico = document.querySelector("#grafico");
  
  atributos.forEach(([nome, valor, descricao]) => {
    const linha = document.createElement("div");
    linha.className = "linha";
  
    const rotulo = document.createElement("span");
    rotulo.textContent = nome;
  
    const trilho = document.createElement("div");
    trilho.className = "trilho";
  
    const barra = document.createElement("div");
    barra.className = "barra";
  
    const maiorValor = 120;
    barra.style.width = `${(valor / maiorValor) * 100}%`;
  
    if (valor < 60) {
      barra.style.backgroundColor = "#e74c3c";
    } else if (valor < 90) {
      barra.style.backgroundColor = "#f1c40f";
    } else {
      barra.style.backgroundColor = "#2ecc71";
    }
  
    const textoValor = document.createElement("span");
    textoValor.className = "valor";
    textoValor.textContent = valor;
  
    const textoDescricao = document.createElement("span");
    textoDescricao.className = "descricao";
    textoDescricao.textContent = descricao;
  
    trilho.appendChild(barra);
    linha.append(rotulo, trilho, textoValor, textoDescricao);
    grafico.appendChild(linha);
  });
 */
  const pokemons = {
    Venusaur,
    Charizard,
    Blastoise
  };
  const titulos = {
    levelUp: ["NÍVEL", "GOLPE", "CATEGORIA", "TIPO", "PODER", "PRECISÃO", "DESCRIÇÃO"],
    outras: ["GOLPE", "CATEGORIA", "TIPO", "PODER", "PRECISÃO", "DESCRIÇÃO"]
  };
  
  const coresTipos = {
    NORMAL: "#d3d6d3", //1
    GRASS: "#3fec48", //2
    FIRE: "#ff2323", //3
    WATER: "#329adf", //4
    ELECTRIC: "#e8d82e", //5
    POISON: "#a632c3", //6
    FIGHTING: "#ae3a1d", //7
    FLYING: "#7cffda", //8
    PSYCHIC: "#e42f7e", //9
    GROUND: "#b16e17", //10
    ICE: "#42e7ed", //11
    BUG: "#a8f749", //12
    ROCK: "#8f7567", //13
    GHOST: "#6e1eaa", //14
    DRAGON:"#490c8e", //15
    DARK:"#212121", //16
    STEEL:"#6a6a6a" //17
  }; 
  
  function criarTabela(nome, linhas, isLevelUp = false) {
    const secao = document.createElement("section");
    secao.className = "secao-golpes";
  
    const titulo = document.createElement("h2");
    titulo.textContent = nome;
    secao.appendChild(titulo);
  
    const rolagem = document.createElement("div");
    rolagem.className = "rolagem-tabela";
  
    const tabela = document.createElement("table");
    tabela.className = "tabela-golpes";
  
    const colunas = isLevelUp ? titulos.levelUp : titulos.outras;
    const thead = document.createElement("thead");
    const trCabecalho = document.createElement("tr");
  
    colunas.forEach(texto => {
      const th = document.createElement("th");
      th.textContent = texto;
      trCabecalho.appendChild(th);
    });
  
    thead.appendChild(trCabecalho);
    tabela.appendChild(thead);
  
    const tbody = document.createElement("tbody");
    const indiceTipo = isLevelUp ? 3 : 2;
  
    (linhas || []).forEach(golpe => {
      const tr = document.createElement("tr");
  
      golpe.forEach((valor, indice) => {
        const td = document.createElement("td");
        const texto = String(valor ?? "").trim();
  
        if (texto === "∞") {
          td.classList.add("valor-infinito");
        }
  
        if (indice === indiceTipo && texto !== "") {
          const tipo = document.createElement("span");
          tipo.className = "tipo-golpe";
          tipo.textContent = texto;
          tipo.style.setProperty("--cor-tipo", coresTipos[texto] || "#555555");
          td.appendChild(tipo);
        } else {
          td.textContent = texto || "—";
        }
  
        tr.appendChild(td);
      });
  
      tbody.appendChild(tr);
    });
  
    tabela.appendChild(tbody);
    rolagem.appendChild(tabela);
    secao.appendChild(rolagem);
  
    return secao;
  }  

  function criarTabelaEncounter(linhas) {
    const secao = document.createElement("section");
    secao.className = "secao-golpes";
  
    const titulo = document.createElement("h2");
    titulo.textContent = "ENCONTROS";
    secao.appendChild(titulo);
  
    const rolagem = document.createElement("div");
    rolagem.className = "rolagem-tabela";
  
    const tabela = document.createElement("table");
    tabela.className = "tabela-golpes";
  
    const cabecalho = document.createElement("thead");
    const linhaCabecalho = document.createElement("tr");
  
    ["LOCAL", "ENCONTRO"].forEach(texto => {
      const th = document.createElement("th");
      th.textContent = texto;
      linhaCabecalho.appendChild(th);
    });
  
    cabecalho.appendChild(linhaCabecalho);
    tabela.appendChild(cabecalho);
  
    const corpo = document.createElement("tbody");
  
    linhas.forEach(encontro => {
      const tr = document.createElement("tr");
  
      encontro.forEach(valor => {
        const td = document.createElement("td");
        td.textContent = String(valor ?? "").trim() || "—";
        tr.appendChild(td);
      });
  
      corpo.appendChild(tr);
    });
  
    tabela.appendChild(corpo);
    rolagem.appendChild(tabela);
    secao.appendChild(rolagem);
  
    return secao;
  }
  
  function criarTabelaInformacao(tituloTexto, cabecalhoTexto, valor) {
    const secao = document.createElement("section");
    secao.className = "secao-golpes";
  
    const titulo = document.createElement("h2");
    titulo.textContent = tituloTexto;
    secao.appendChild(titulo);
  
    const rolagem = document.createElement("div");
    rolagem.className = "rolagem-tabela";
  
    const tabela = document.createElement("table");
    tabela.className = "tabela-golpes";
  
    const thead = document.createElement("thead");
    const linhaCabecalho = document.createElement("tr");
    const th = document.createElement("th");
  
    th.textContent = cabecalhoTexto;
    linhaCabecalho.appendChild(th);
    thead.appendChild(linhaCabecalho);
  
    const tbody = document.createElement("tbody");
    const linha = document.createElement("tr");
    const td = document.createElement("td");
    td.classList.add("texto-review");
  
    td.textContent = String(valor).trim() || "—";
    linha.appendChild(td);
    tbody.appendChild(linha);
  
    tabela.append(thead, tbody);
    rolagem.appendChild(tabela);
    secao.appendChild(rolagem);
  
    return secao;
  }

  const dadosGinasios = [
    { nivel: 14, tipos: ["ROCK"] },
    { nivel: 21, tipos: ["WATER"] },
    { nivel: 24, tipos: ["ELECTRIC"] },
    { nivel: 29, tipos: ["GRASS"] },
    { nivel: 43, tipos: ["POISON"] },
    { nivel: 43, tipos: ["PSYCHIC"] },
    { nivel: 47, tipos: ["FIRE"] },
    { nivel: 50, tipos: ["GROUND"] }
  ];
  function criarTabelaGinasios(pokemon, dados) {
    const secao = document.createElement("section");
    secao.className = "secao-golpes";
  
    const titulo = document.createElement("h2");
    titulo.textContent = "AVALIAÇÃO NOS GINÁSIOS";
    secao.appendChild(titulo);
  
    const rolagem = document.createElement("div");
    rolagem.className = "rolagem-tabela";
  
    const tabela = document.createElement("table");
    tabela.className = "tabela-golpes";
  
    const cabecalho = document.createElement("thead");
    const linhaCabecalho = document.createElement("tr");
  
    ["GINÁSIO", "NÍVEL", "TIPOS", "AVALIAÇÃO"].forEach(texto => {
      const th = document.createElement("th");
      th.textContent = texto;
      linhaCabecalho.appendChild(th);
    });
  
    cabecalho.appendChild(linhaCabecalho);
    tabela.appendChild(cabecalho);
  
    const corpo = document.createElement("tbody");
  
    for (let i = 1; i <= 8; i++) {
      const tr = document.createElement("tr");
      const dadosDoGinasio = dados[i - 1];
  
      const celulaGinasio = document.createElement("td");
      celulaGinasio.textContent = `Ginásio ${i}`;
      tr.appendChild(celulaGinasio);
  
      const celulaNivel = document.createElement("td");
      celulaNivel.textContent = dadosDoGinasio.nivel ?? "—";
      tr.appendChild(celulaNivel);
  
      const celulaTipos = document.createElement("td");
  
      dadosDoGinasio.tipos.forEach(tipoNome => {
        const tipo = document.createElement("span");
        tipo.className = "tipo-golpe";
        tipo.textContent = tipoNome;
        tipo.style.setProperty(
          "--cor-tipo",
          coresTipos[tipoNome] || "#555555"
        );
        celulaTipos.appendChild(tipo);
      });
  
      tr.appendChild(celulaTipos);
  
      const celulaAvaliacao = document.createElement("td");
      celulaAvaliacao.textContent = pokemon[`gym${i}`] || "—";
      tr.appendChild(celulaAvaliacao);
  
      corpo.appendChild(tr);
    }
  
    tabela.appendChild(corpo);
    rolagem.appendChild(tabela);
    secao.appendChild(rolagem);
  
    return secao;
  }  

  function renderizarPokemon(pokemon, grafico, destino) {
    const atributos = [
      ["HP", pokemon["HP"], pokemon["DescriçãoHP"]],
      ["Ataque Físico", pokemon["Ataque Físico"], pokemon["DescriçãoAF"]],
      ["Defesa Física", pokemon["Defesa Física"], pokemon["DescriçãoDF"]],
      ["Ataque Especial", pokemon["Ataque Especial"], pokemon["DescriçãoAE"]],
      ["Defesa Especial", pokemon["Defesa Especial"], pokemon["DescriçãoDE"]],
      ["Velocidade", pokemon["Velocidade"], pokemon["DescriçãoV"]]
    ];
  
    atributos.forEach(([nome, valor, descricao]) => {
      const linha = document.createElement("div");
      linha.className = "linha";
  
      const rotulo = document.createElement("span");
      rotulo.textContent = nome;
  
      const trilho = document.createElement("div");
      trilho.className = "trilho";
  
      const barra = document.createElement("div");
      barra.className = "barra";
  
      const maiorValor = 120;
      barra.style.width = `${(valor / maiorValor) * 100}%`;
  
      if (valor < 60) {
        barra.style.backgroundColor = "#e74c3c";
      } else if (valor < 90) {
        barra.style.backgroundColor = "#f1c40f";
      } else {
        barra.style.backgroundColor = "#2ecc71";
      }
  
      const textoValor = document.createElement("span");
      textoValor.className = "valor";
      textoValor.textContent = valor;
  
      const textoDescricao = document.createElement("span");
      textoDescricao.className = "descricao";
      textoDescricao.textContent = descricao;
  
      trilho.appendChild(barra);
      linha.append(rotulo, trilho, textoValor, textoDescricao);
      grafico.appendChild(linha);
    });
  
    destino.appendChild(
      criarTabela("GOLPES POR NÍVEL", pokemon["Level up"], true)
    );
    destino.appendChild(
      criarTabela("GOLPES POR MOVE TUTOR", pokemon["MT"])
    );
    destino.appendChild(
      criarTabela("GOLPES POR HM", pokemon["HM"])
    );
    destino.appendChild(
      criarTabela("GOLPES POR TM", pokemon["TM"])
    );
    destino.appendChild(
      criarTabelaEncounter(pokemon["Encounter"])
    );
    destino.appendChild(
      criarTabelaGinasios(pokemon, dadosGinasios)
    );
    destino.appendChild(
      criarTabelaInformacao("REVIEW", "ANÁLISE", pokemon["Review"])
    );
    destino.appendChild(
      criarTabelaInformacao("RANK", "CLASSIFICAÇÃO", pokemon["Rank"])
    );
  }
  const pagina = document.querySelector("#pagina-pokemon");

if (pagina) {
  const pokemon = pokemons[pagina.dataset.pokemon];
  const grafico = pagina.querySelector("#grafico");
  const destino = pagina.querySelector("#tabelas-golpes");

  if (pokemon && grafico && destino) {
    renderizarPokemon(pokemon, grafico, destino);
  }
}

/* const elementoPokemon = document.querySelector("#pagina-pokemon");

if (elementoPokemon) {
  const pokemonSelecionado = pokemons[elementoPokemon.dataset.pokemon];
  const grafico = elementoPokemon.querySelector("#grafico");
  const destino = elementoPokemon.querySelector("#tabelas-golpes");

  if (pokemonSelecionado && grafico && destino) {
    renderizarPokemon(pokemonSelecionado, grafico, destino);
  } else {
    document.body.insertAdjacentHTML(
      "beforeend",
      "<p>Não foi possível encontrar o Pokémon, o gráfico ou o espaço das tabelas.</p>"
    );
  }
} */
