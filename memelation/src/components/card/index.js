import React from 'react'
import {MomWrapper, Caard, ImageCard, TextCard, Span, H2, CardStats, Stat, Value, Type, CardStatBorder, Sup } from './styled'
import {Link} from 'react-router-dom'
import api from '../../services/memelation'
const memelation = new api()


export default function Card({imagem,categoria,autor,hashtags,alt}){
    function Random(){
        const result = Math.round(Math.random() *10)
        return result;
    }
    const read = Random()
    const views = Random() * 100
    const comments = Random() * 10  
    
    
    return (
        <MomWrapper>
            <Caard>
                <ImageCard>
                    <img src={memelation.getPhoto(imagem)} alt='not Found' heigth='120'/>
                </ImageCard> 
                <TextCard>
                    <Span>{categoria}</Span>
                    <H2>{autor}</H2>
                    <Span>{hashtags} </Span>
                    <span>
                        <Link to={{
                            pathname:'/change',
                            state:alt }}>
                            ALterar
                        </Link>
                    </span>
                    <span>
                    {console.log(alt)}
                        <Link to={{
                            pathname:'/delete',
                            state:alt }}>Excluir</Link>
                    </span>
                </TextCard>

                <CardStats>
                    <Stat>
                        <Value>{read}<Sup>m</Sup></Value>
                        <Type>Read</Type>
                    </Stat>
                    <CardStatBorder>
                        <Value>{views}</Value>
                        <Type>Views</Type>
                    </CardStatBorder>
                    <Stat>
                        <Value>{comments}</Value>
                        <Type>Comments</Type>
                    </Stat>
                </CardStats>
            </Caard>
        
        </MomWrapper>
    );
}


