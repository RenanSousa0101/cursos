function group(){
    console.log('Export nomeado não-inline (agrupado)')
}

function exportDefault(){ //só pode ter um por arquivo
    console.log('Export default não-inline')
}

export { group }
export default exportDefault 