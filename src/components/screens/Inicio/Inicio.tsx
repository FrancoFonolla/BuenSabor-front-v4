import { Box, Grid, Container, Typography } from "@mui/material";
import ChartCard from "../../ui/Cards/ChartCard/ChartCard";
import BaseBar from "../../ui/Charts/BaseBar";
import BasePie from "../../ui/Charts/BasePie";
import InicioCard from "../../ui/Cards/InicioCard/InicioCard";
import { useParams } from "react-router-dom";

// Contenido para las tarjetas de inicio
const productosContent = {
  url: "https://th.bing.com/th/id/R.e0f292dbf4410492e113bb6d527f4a4a?rik=UIUqG0Kp5DCOVg&pid=ImgRaw&r=0",
  title: "Productos",
  content:
    "Añade nuevos platos o actualiza los precios para mejorar la experiencia de tus clientes.",
};

const empresasContent = {
  url: "https://pqs.pe/wp-content/uploads/2021/02/PQS-Alimentos-1.jpg",
  title: "Insumos",
  content: "Agrega, actualiza o elimina los insumos de tu sucursal",
};

const promocionesContent = {
  url: "https://th.bing.com/th/id/OIP.rk8sKBJs4p9Xq0RUt1r82wHaHa?rs=1&pid=ImgDetMain",
  title: "Promociones",
  content:
    "Personaliza tus ofertas y haz que destaquen para que tus clientes no puedan resistirse.",
};

// Estilo para las tarjetas
const cardStyle = {
  width: "100%",
  height: "100%",
};

//Renderización del componente
const Inicio: React.FC = () => {
  const { sucursalId } = useParams<{ sucursalId: string }>();
  const id = sucursalId || "";

  return (
    <Box component="main" sx={{ flexGrow: 1, pt: 10 }}>
      <Container>
        <Typography component="h1" variant="h5" color="initial">
          Bienvenido al DashBoard{" "}
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{ py: 2, alignContent: "center", justifyContent: "center" }}
        >
          <Grid item xs={12} md={6}>
            <ChartCard title="Gráfico de Barras">
              <BaseBar />
            </ChartCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <ChartCard title="Gráfico de Pastel">
              <BasePie />
            </ChartCard>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          sx={{ alignContent: "center", justifyContent: "center" }}
        >
          <Grid item xs={12} md={4}>
            <Box sx={cardStyle}>
              <InicioCard content={productosContent} sucursalId={id} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={cardStyle}>
              <InicioCard content={empresasContent} sucursalId={id} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={cardStyle}>
              <InicioCard content={promocionesContent} sucursalId={id} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Inicio;
