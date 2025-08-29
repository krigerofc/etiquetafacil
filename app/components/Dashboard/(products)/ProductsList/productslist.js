"use client";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";


export default function ProductsList(){
    const Tittles = [ "id", "Nome" , "Responsavel", "Marca", "Categoria", "data"]

    const products = [
        {id: 1, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 2, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 3, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 4, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 13, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 23, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 34, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 44, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 154, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 24, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 3545, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 544, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 143, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 253, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 364, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 4754, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 31, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 542, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 32, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 432, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 11233, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 24322, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 3234, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 44244, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 561, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 2642, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 243, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 6644, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 44613, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 26443, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 36644, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
        {id: 4444, name:"veneno", responsavel:"Zegotinha", marca:"França", categoria:"Morte", data:"200-02-20"},
    ]

    function DeleteProduct(product){

    }

    function EditProduct(Product){

    }

    function CreateProduct(form){

    }

    return(
        <div className="w-full">
            <div className="w-full p-2 bg-gray-50 rounded-2xl shadow-sm max-h-[780px] overflow-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className=" text-left border-b-2">
                            { Tittles.map((item, t) => (
                                <td className="p-2" key={t}> {item} </td>
                            ))}
                        </tr>
                    </thead>

                    <tbody> 
                        {products.map((p) => (
                            <tr key={p.id}>
                                <td className="p-2">{p.id}</td>
                                <td className="p-2">{p.name}</td>
                                <td className="p-2">{p.responsavel}</td>
                                <td className="p-2">{p.marca}</td>
                                <td className="p-2">{p.categoria}</td>
                                <td className="p-2">{p.data}</td>

                                <td className="p-2">
                                    <button
                                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                                    onClick={() => (EditProduct(p))}
                                    >
                                    <MdEdit/>
                                    </button>
                                </td>

                                <td className="p-2">
                                    <button
                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 cursor-pointer"
                                    onClick={() => (DeleteProduct(p))}
                                    >
                                    <MdDeleteForever/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}