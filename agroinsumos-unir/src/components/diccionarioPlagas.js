import { useParams } from "react-router";

const DiccionarioPlagas = () => {
    
    let {plagas} = useParams();
    
    return (
        <div>
            <h3>Plaga: <bold>{plagas}</bold></h3>
        </div>
    );
}

export default DiccionarioPlagas;