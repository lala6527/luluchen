import { AppBar, Button, Card, CardContent, CardActions, Container, Toolbar, Typography, Grid } from '@mui/material';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend, RadialLinearScale, Filler } from 'chart.js';
import { Doughnut, Line, Bar, Radar } from 'react-chartjs-2';
import styles from './dashboard.module.scss';

export const Dashboard = () => {
  ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    RadialLinearScale,
    Title,
    Filler,
    Tooltip,
    Legend
  );

  // Radar Chart
  const dataRadar = {
    labels: ['五顆星', '四顆星', '三顆星', '二顆星', '一顆星', '尚未評論'],
    datasets: [
      {
        label: '數量',
        data: [20, 18, 16, 0, 2, 10],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  const optionsRadar = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '評價',
      },
    },
  };
  // Doughnut Chart
  const dataDoughnut = {
    labels: ['女生衣著', '男生衣著', '運動健身', '男女鞋', '居家生活', '美食、伴手禮'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const optionsDoughnut = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '商品分類',
      },
    },
  };
  const dataLine = {
    labels: ["三月", "四月", "五月", "六月", "七月", "八月", "九月"],
    datasets: [
      {
        label: "快點購",
        data: [1068, 1037, 992, 813, 1043, 1848, 1310],
        borderColor: 'blue',
        tension: 0,
        pointStyle: 'rect',
        pointBorderColor: 'blue',
        pointBackgroundColor: '#fff',
        showLine: true,
      },
      {
        label: "快樂購",
        data: [716, 976, 918, 793, 964, 1033, 953],
        borderColor: 'black',
        tension: 0,
        pointStyle: 'rect',
        pointBorderColor: 'black',
        pointBackgroundColor: '#fff',
        showLine: true
      }
    ]
  }
  const optionsLine = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '流量',
      },
    },
  };
  const dataBar = {
    labels: ["四月", "五月", "六月", "七月", "八月", "九月"],
    datasets: [
      {
        label: "快點購",
        data: [300, 400, 500, 600, 700, 800],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: "快樂購",
        data: [250, 300, 350, 400, 450, 500],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ],
  };



  const optionsBar = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '訂單量',
      },
    },
  };
  return (
    <div className="App">
      <AppBar position="relative" sx={{ backgroundColor: "#69A8aa" }}>
        <Toolbar className={styles.Toolbar}>
          <Typography variant="h6" color="inherit" noWrap >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h6" noWrap sx={{ my: 2 }}>
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Radar options={optionsRadar} data={dataRadar} />
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Doughnut options={optionsDoughnut} data={dataDoughnut} />
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Line options={optionsLine} data={dataLine} />
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Bar options={optionsBar} data={dataBar} />
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}