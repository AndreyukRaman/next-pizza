
import {Container} from "@/components/shared/container";
import {Title} from "@/components/shared/title";
import {TopBar} from "@/components/shared/top-bar";
import {Filters} from "@/components/shared/filters";
import {ProductsGroupList} from "@/components/shared/products-group-list";


export default function Home() {
  return (

   <>
       <Container className="mt-10">
<Title text="Все пиццы" size="lg" className="font-extrabold"/>
       </Container>
          <TopBar/>

       <Container className=" mt-10 pb-14">
<div className="flex gap-[80px]">

    {/* Фильтрация */}
<div className="w-[250px]">
    <Filters/>
</div>

    {/* Список товаров */}
    <div className="flex-1">
        <div className="flex flex-col gap-16">
            <ProductsGroupList title="Пиццы" items={[{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]}]} categoryId={1}/>
            <ProductsGroupList title="Завтрак" items={[{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]}]}/>
        </div>
    </div>

    {/*  Фильтр ингридиентов */}


</div>
       </Container>
   </>

  );
}
