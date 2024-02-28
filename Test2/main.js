const tbody = document.querySelector('tbody') || document.createElement('div');
const urlProduct = 'http://localhost:3000/product';
const content = document.querySelector('.content') || document.createElement('div');
const btnAdd = document.querySelector('.btn-add') || document.createElement('div');
const list = function(){
    fetch(urlProduct)
    .then(res => res.json())
    .then((data) => {
        const html = data.map(p => {
            return /*html */`<tr>
            <th scope="row">${p.id}</th>
            <td>${p.name}</td>
            <td>${p.price}</td>
            <td>
            <button type="button" class="btn btn-danger btn-del" data-id="${p.id}">Xóa</button> |
            <button type="button" class="btn btn-secondary btn-update" data-id="${p.id}">Sửa</button>
            </td>
          </tr>`;
        }).join('');
        tbody.innerHTML = html;
        const btnDel = document.querySelectorAll('.btn-del') || document.createElement('div');
        for (const btn of btnDel) {
            btn.addEventListener('click', function(){
                if(confirm('Bạn có muốn xóa không')){
                    deleteProduct(btn.dataset.id);
                }
            })
        }
        const btnUpdate = document.querySelectorAll('.btn-update') || document.createElement('div');
        for (const btn of btnUpdate) {
            btn.addEventListener('click', function(){
                fetch(`${urlProduct}/${btn.dataset.id}`)
                .then(r => r.json())
                .then((d) => {
                content.innerHTML = /*html */`<form action="" id="form-update">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Tên sản phẩm</span>
                        <input type="text" class="form-control namep" value="${d.name}" placeholder="Nhập tên sản phẩm" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    <p class="e-name"></p>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Giá sản phẩm</span>
                        <input type="text" class="form-control pricep" value="${d.price}" placeholder="Nhập giá sản phẩm" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    <p class="e-price"></p>
                    <button type="submit" class="btn btn-success">Sửa</button>
                    </form>`;
                    const formUpdate = document.querySelector('#form-update');
                    formUpdate.addEventListener('submit',function(e){
                        e.preventDefault();
                        const namep = document.querySelector('.namep');
                        const pricep = document.querySelector('.pricep');
                        if(namep.value == ""){
                            document.querySelector('.e-name').innerHTML = 'Tên không được để trống';
                            namep.focus();
                            return false;
                        }else if(pricep.value == ""){
                            document.querySelector('.e-price').innerHTML = 'Giá không được để trống';
                            pricep.focus();
                            return false;
                        }else if(isNaN(Number(pricep.value))){
                            document.querySelector('.e-price').innerHTML = 'Giá phải là số';
                            pricep.focus();
                            return false;
                        }else if(Number(pricep.value) <= 0){
                            document.querySelector('.e-price').innerHTML = 'Giá phải lớn hơn 0';
                            pricep.focus();
                            return false;
                        }
                        const newData = {
                            "id":d.id,
                            "name": namep.value,
                            "price": pricep.value
                        }
                        updateProduct(d.id, newData);
                    })
                    })
                .catch(e => console.log(e));
            })
        }
    })
    .catch(err => console.log(err));
}
list();



const deleteProduct = function(id){
    fetch(`${urlProduct}/${id}`,{
        method:"DELETE"
    })
    .then(res => res.json())
    .then(() => {
        alert('Đã xóa sản phẩm');
    })
    .catch(err => console.log(err));
}

const updateProduct = function(id,data){
    fetch(`${urlProduct}/${id}`,{
        method:'PUT',
        headers: {
            "Content-Type": "application/json",
            
        },
        body: JSON.stringify(data)
    }).then(r => r.json())
    .then(()=>{
        alert('Đã sửa');
    })
    .catch(e => console.log(e));
}


btnAdd.addEventListener('click',function(){
    content.innerHTML = /*html */`<form action="" id="form-add">
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Tên sản phẩm</span>
        <input type="text" class="form-control namep" placeholder="Nhập tên sản phẩm" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <p class="e-name"></p>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Giá sản phẩm</span>
        <input type="text" class="form-control pricep" placeholder="Nhập giá sản phẩm" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <p class="e-price"></p>
    <button type="submit" class="btn btn-success">Thêm</button>
    </form>`;
    const formAdd = document.querySelector('#form-add');
    formAdd.addEventListener('submit',function(e){
        e.preventDefault();
        const namep = document.querySelector('.namep') || document.createElement('div');
        const pricep = document.querySelector('.pricep') || document.createElement('div');
        if(namep.value == ""){
            document.querySelector('.e-name').innerHTML = 'Tên không được để trống';
            namep.focus();
            return false;
        }else if(pricep.value == ""){
            document.querySelector('.e-price').innerHTML = 'Giá không được để trống';
            pricep.focus();
            return false;
        }else if(isNaN(Number(pricep.value))){
            document.querySelector('.e-price').innerHTML = 'Giá phải là số';
            pricep.focus();
            return false;
        }else if(Number(pricep.value) <= 0){
            document.querySelector('.e-price').innerHTML = 'Giá phải lớn hơn 0';
            pricep.focus();
            return false;
        }
        const newData = {
            "name": namep.value,
            "price": pricep.value
        }
        addProduct(newData);
    })
})

const addProduct = function(data){
    fetch(urlProduct,{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            
        },
        body:JSON.stringify(data)
    })
    .then(r => r.json())
    .then(()=>{
        alert(`Đã thêm sản phẩm`);
    })
    .catch(e => console.log(e));
}



const btnLogin = document.querySelector('.form-login');
const inpUser = document.querySelector('.user-name');
const inpPass = document.querySelector('.user-pass');
console.log(btnLogin);
btnLogin.addEventListener('click',function(e){
    e.preventDefault();
    if(inpUser.value == ""){
        alert('Không được để trống tên');
        inpUser.focus();
        return false;
    }else if(inpPass.value == ""){
        alert('Không được để trống mật khẩu');
        inpPass.focus();
        return false;
    }
    fetch('http://localhost:3000/user').then(r => r.json()).then((data) => {
        if(checkLogin(data, inpUser.value, inpPass.value)){
            alert(`Xin chào ${inpUser.value}`);
            document.location = 'index.html';
        }else{
            alert('Sai tài khoản hoặc mật khẩu');
        }
    }).catch(e => console.log(e));
})
const checkLogin = function(data, user,pass){
    return data.some(d => {
        return d.name == user && d.password == pass; 
    })
}