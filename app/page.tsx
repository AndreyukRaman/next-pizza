
import {Container} from "@/components/shared/container";
import {Title} from "@/components/shared/title";
import {TopBar} from "@/components/shared/top-bar";
import {Filters} from "@/components/shared/filters";
import {ProductsGroupList} from "@/components/shared/products-group-list";


export default function Home() {
  return (

   <>
       <Container className="mt-10">
<Title text="Все пиццы"
size="lg"
className="font-extrabold"/>
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
            <ProductsGroupList title="Пиццы"
items={[{id:1, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:2, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:3, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:4, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:5, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:6, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:7, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:8, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]}]}
categoryId={1}/>
            <ProductsGroupList title="Комбо"
items={[{id:9, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:10, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:11, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:12, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:13, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:14, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:15, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]},{id:16, name:'Чизбурер-пицца', imageUrl: "https://media.dodostatic.net/image/r:292x292/0198bf4f806371f19d529f9e9e7dba36.avif", price:550, items: [{price:550}]}]}
categoryId={2}/>
        </div>
    </div>

    {/*  Фильтр ингридиентов */}


</div>
       </Container>
   </>

  );
}
