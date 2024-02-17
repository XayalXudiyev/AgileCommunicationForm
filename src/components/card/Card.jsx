import { Box, Card, CardContent, CardHeader } from "@mui/material"
import CardTitlee from "./cardTitlee/CardTitlee"
import CardContentComponent from "./CardContentComponent/CardContentComponent"


const CardComponent = () => {
  return (
    <Box sx={{ width: '80%', height: '35rem', border: '3px solid #e4e4e4', margin: 'auto', marginY: '2rem', borderRadius: '10px', padding: '2rem', display: 'flex', flexDirection: "column", }}  >
      <CardTitlee />
      <Card>

        <CardHeader title=""
          subheader=""
          avatar={null}
          action={null}>
          <CardTitlee />
        </CardHeader>

        <CardContent sx={{ backgroundColor: '#f1f1f1', height: '30rem' }}>
          <CardContentComponent />
        </CardContent>
      </Card>
    </Box>
  )
}

export default CardComponent