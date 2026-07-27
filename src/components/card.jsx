// export const Card = (props) => {
//     return(
//         <>
//             <img src={props.imagem} alt={props.nome} />
//               <div>
//                 <h2>{props.nome}</h2>
//                 <p>{props.descricao}</p>
//                 <h3>${(props.valor).toFixed(2)}</h3>
//               </div>
//         </>
//     )
// }

import e from './card.module.css'

export const Card = ({plant, espec, fami, orige}) => {
    return(
        <>
            <img className={e.cardImage} src={imagem} alt={plant} />
            <div className={e.wrapText}>
                <h2>{plant}</h2>
                <p>Espécie: {espec}</p>
                <p>Família: {fami}</p>
                <h3>Origem: {orige}</h3>
            </div>
       </>
    )
}
