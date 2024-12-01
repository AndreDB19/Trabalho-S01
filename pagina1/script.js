
function openSidebar()
{
    document.getElementById('sidebar').classList.toggle('open');
}

function closeSidebar()
{
    document.getElementById('sidebar').classList.remove('open');
}


function perfilButton()
{
    document.getElementById('perfilSidebar').classList.toggle('open');
}

function closePerfilSidebar()
{
    document.getElementById('perfilSidebar').classList.remove('open');
}



function Forms()
{
    const novoNome = document.getElementById('nome').value;
    document.querySelector('.Perfil strong').textContent = novoNome;
    document.getElementById('perfilSidebar').classList.remove('open'); 
    document.getElementById('perfilForm').reset(); 
}