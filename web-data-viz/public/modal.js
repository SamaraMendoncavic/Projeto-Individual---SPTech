// referentes a primeira modal 

const abrir_modal1 = document.getElementById("abrir_modal1");
const fechar_modal1 = document.getElementById("fechar_modal1");
const elemento_modal = document.getElementById("modal_1")

const toggleModal = () => elemento_modal.classList.toggle('modal_abrir');

    // classList é a lista de classes do nosso elemento que neste caso é o 'abrir_modal1'
    // toggle ele faz: ele altenar, no caso se ele tem uma classe eu remove e se eu não tenho eu adiciono

abrir_modal1.addEventListener('click', toggleModal);
fechar_modal1.addEventListener('click', toggleModal);

// referentes a segunda modal

const abrir_modal2 = document.getElementById("abrir_modal2");
const fechar_modal2 = document.getElementById("fechar_modal2");
const elemento_modal2 = document.getElementById("modal_2");

const toggleModal2 = () => elemento_modal2.classList.toggle('modal_abrir');

abrir_modal2.addEventListener('click', toggleModal2);
fechar_modal2.addEventListener('click', toggleModal2);

// referentes a terceira modal

const abrir_modal3 = document.getElementById("abrir_modal3");
const fechar_modal3 = document.getElementById("fechar_modal3");
const elemento_modal3 = document.getElementById("modal_3");

const toggleModal3 = () => elemento_modal3.classList.toggle('modal_abrir');

abrir_modal3.addEventListener('click', toggleModal3);
fechar_modal3.addEventListener('click', toggleModal3);

// referentes a quarta modal

const abrir_modal4 = document.getElementById("abrir_modal4");
const fechar_modal4 = document.getElementById("fechar_modal4");
const elemento_modal4 = document.getElementById("modal_4");

const toggleModal4 = () => elemento_modal4.classList.toggle('modal_abrir');

abrir_modal4.addEventListener('click', toggleModal4);
fechar_modal4.addEventListener('click', toggleModal4);

// referentes a quinta modal

const abrir_modal5 = document.getElementById("abrir_modal5");
const fechar_modal5 = document.getElementById("fechar_modal5");
const elemento_modal5 = document.getElementById("modal_5");

const toggleModal5 = () => elemento_modal5.classList.toggle('modal_abrir');

abrir_modal5.addEventListener('click', toggleModal5);
fechar_modal5.addEventListener('click', toggleModal5);

// referentes a sexta modal

const abrir_modal6 = document.getElementById("abrir_modal6");
const fechar_modal6 = document.getElementById("fechar_modal6");
const elemento_modal6 = document.getElementById("modal_6");

const toggleModal6 = () => elemento_modal6.classList.toggle('modal_abrir');

abrir_modal6.addEventListener('click', toggleModal6);
fechar_modal6.addEventListener('click', toggleModal6);
