let counter=0;
    let addValue=true;
    const ul = document.createElement('ul');
    const filter_btn=document.getElementById('filter_btn')
    document.getElementById('clear').addEventListener('click', async () => {
  try {
    const response = await fetch('/delete', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
 if (response.ok) {
      // Select all cards and remove them from the DOM
      document.qrySelectorAll('.card').forEach(card => card.remove());
    } else {
      alert('Failed to clear games.');
    }
  } catch (error) {
    console.error('Error deleting games:', error);
  }
});
document.getElementById('filter').addEventListener('click',()=>{
    if(counter%2==0){
    filter_btn.style.borderRadius="25px 25px 0px 0px";
    ul.style.display="flex";
    counter++;
    }else{
    filter_btn.style.borderRadius="50px";
    ul.style.display="none";
    counter++;
    }
    if(addValue){
const items = [
  { text: 'None', path: '/' },
  { text: 'Name', path: '/name' },
  { text: 'Genre', path: '/genre' },
  { text: 'Developer', path: '/developer' }
];
items.forEach(item => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = item.path;      
  a.textContent = item.text; 
  li.appendChild(a);     
  ul.appendChild(li);     
});
const filter = document.getElementById('filter');
filter.appendChild(ul);
addValue=false;
    }
});