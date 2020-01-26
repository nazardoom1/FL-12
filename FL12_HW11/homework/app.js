const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [        
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here

let rootUl = document.createElement('ul');

rootNode.appendChild(rootUl);
structureParse(structure, rootUl);

function structureParse(arr, elem){
  
    if(!arr || !elem) {
      return;
    }

    arr.forEach(val => {
        let li = document.createElement('li');                 
               
        if(val.folder){ //creating folder branch
          let div = document.createElement('div');
          div.appendChild(createIcon('folder'));  
          div.addEventListener('click', clickExpand); 
          div.appendChild(createText(val.title)); //creating folder div

          div.classList.add('folder');
          div.classList.add('hover'); //adding classes for this div

          li.appendChild(div);
          
          elem.appendChild(li);                    
            
          if(!val.children){ //creating folder branch ending
            let em = document.createElement('em');
            em.classList.add('hidden');
            em.textContent = 'Folder is empty';
            
            li.appendChild(em);
            elem.appendChild(li);  
          } else {
            let ul = document.createElement('ul');
            ul.classList.add('hidden');
            li.appendChild(ul); 
            structureParse(val.children, ul);
          }         
            
            } else { //creating file branch
              let div = document.createElement('div');

              div.appendChild(createIcon('insert_drive_file'));   
              div.appendChild(createText(val.title)); //creating file div

              div.classList.add('file');
              div.classList.add('hover'); //adding classes for this div

              li.appendChild(div);
              elem.appendChild(li);   
        }
    })
}

function createText(text){
  let span = document.createElement('span');
  span.textContent = text;
  return span;
}

function createIcon(type){
  let i = document.createElement('i');
  i.classList.add('material-icons');
  i.textContent = type;
  return i;
}

function clickExpand(){ // click event function
  let child, oldIcon;
  if(this.nextElementSibling.className === 'hidden') {
    this.nextElementSibling.classList.add('clicked');
    this.nextElementSibling.classList.remove('hidden');
    child = this.childNodes;
    this.insertBefore(createIcon('folder_open'), child[1]); //adding opened folder icon
    oldIcon = this.getElementsByTagName('i'); //removing old icon
    this.removeChild(oldIcon[0]);
    return;
  }
  if(this.nextElementSibling.className === 'clicked') {
    this.nextElementSibling.classList.add('hidden');
    this.nextElementSibling.classList.remove('clicked');
    child = this.childNodes;
    this.insertBefore(createIcon('folder'), child[1]); //adding regular folder icon
    oldIcon = this.getElementsByTagName('i'); //removing old icon
    this.removeChild(oldIcon[0]);
    return;
  }
}