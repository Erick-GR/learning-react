// ---> Environment
// Te da iluminación de "atardecer" automáticamente, con reflejos. Hay presets: sunset, dawn, night, warehouse, forest, 
// apartment, studio, city, park, lobby. Para tu reto probablemente no lo necesites — la iluminación de PandaSet típicamente 
// es funcional, no estética.

<Environment preset="sunset" />


// ---> Bounds
// Encuadra automáticamente la cámara para ver todos los objetos hijos:
<Bounds fit clip observe>
    <miEscena />
</Bounds>


// ---> Grid
// Un grid mucho más bonito y configurable que gridHelper:
<Grid args={[20, 20]} cellColor="white" sectionColor="gray" />