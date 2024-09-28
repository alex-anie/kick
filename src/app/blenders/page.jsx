import ProductList from "@/components/fetchingData/ProductList";

export default function BlenderData() {
  return (
    <div>
        <ProductList 
            apiPath="/api/appliances/blenders"
            title="Blender" 
        />
    </div>
  )
}


