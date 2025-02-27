import React from "react";

// import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import Grid from "@mui/material/Grid";
import { keyframes } from "@emotion/react";
// import { styled } from "@mui/system";
import { styled } from "@mui/material/styles";
import { List, ListItem, ListItemText } from "@mui/material";
import { createTimeModel, useTimeModel } from "react-compound-timer";
import TextField from "@mui/material/TextField";
import ButtonBase from "@mui/material/ButtonBase";

const HomeScreen = () => {
  const pages = [
    "О проекте",
    "Стоимость",
    "Планировки",
    "Инфраструктура",
    "Галерея",
    "Отделка",
    "Ипотека",
    "Контакты",
  ];
  const stopwatch = createTimeModel();
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const scrollAnimation = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

  const ScrollingText = styled("div")(({ theme }) => ({
    display: "inline-block",
    whiteSpace: "nowrap",
    animation: `${scrollAnimation} 30s linear infinite`,
  }));
  const items = [
    "4 детский сада в 5 минутах ходьбы",
    "Школа №1 в 10 минутах ходьбы",
    "Стадион, каток, фитнес-клуб и другие спортивные объекты в шаговой доступности",
    "До взрослой и детской поликлиник 7 минут на личном авто и 20 минут на автобусе",
    "Вознесенская церковь",
    "Магазины продуктов и супермаркеты «Магнит», «Пятерочка» и «Дикси»",
  ];
  const timer = createTimeModel({
    // start from 10 seconds
    initialTime: 10000,
    // count down
    direction: "backward",
  });
  const { value } = useTimeModel(timer);
  // test
  const ImageBackdrop = styled("div")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: "#000",
    // opacity: 0,
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
  }));
  const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "100vh",
    // height: "40vh",
    [theme.breakpoints.down("md")]: {
      width: "100% !important",
      height: 100,
    },
    "& .imageTitle": {
      position: "relative",
      padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    "& .imageMarked": {
      height: 3,
      width: 18,
      // background: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity"),
    },
  }));

  const images = [
    {
      url: "https://optim.tildacdn.com/tild3632-6534-4261-b962-646639666431/-/resize/563x/-/format/webp/IMG_2989.jpg",
      title: "Reading",
      width: "100vw",
    },
  ];

  // end test
  return (
    <>
      <Box
        sx={{
          ml: 2,
          mr: 2,
          mt: 3,
          mb: 3,
          overflowY: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              color: "#d4911f",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            ЖК Краснофлотская
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              +7 (495) 363-16-40
            </Box>

            <Box
              sx={{
                pl: 1,
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#d4911f",
                  borderRadius: "30px",
                  p: 1,
                  fontSize: "14px",
                  fontWeight: 700,
                }}
                variant="contained"
              >
                Оставить заявку
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <hr />
      {/* app bar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            img
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                {/* <MenuIcon /> */}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: "black",
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        color: "black",
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            img
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block", mr: 3 }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* end app bar */}
      {/* here */}
      {/* test here */}
      <Box sx={{ mt: 0, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
              // component="h3"
              // variant="h6"
              // color="inherit"
              // className="imageTitle"
              >
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    pt: 5,
                    pl: 9,
                    fontSize: "62px",
                    fontWeight: 700,
                  }}
                >
                  ЖК Краснофлотская
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    pt: 3,
                    pl: 9,
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "rgb(242, 196, 118)",
                  }}
                >
                  Квартиры от 3 605 000 рублей*
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    // pt: 2,
                    pl: 9,
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "rgb(242, 196, 118)",
                  }}
                >
                  Квартиры в ипотеку ПСК от 5,3%-11,9% от 15
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    // pt: 2,
                    pl: 9,
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "rgb(242, 196, 118)",
                  }}
                >
                  463 руб/мес
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    pt: 3,
                    // pl: 9,
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "rgb(242, 196, 118)",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                    }}
                  >
                    Скидка до 11%
                  </span>
                  на все квартиры действует еще:
                </Typography>
                <Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      // justifyContent: "space-between",
                      justifyContent: "center",
                      pb: 5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "64px",
                        pr: 10,
                        color: "white",
                      }}
                    >
                      16
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "64px",
                        pr: 10,
                        color: "white",
                      }}
                    >
                      51
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "64px",
                        pr: 10,
                        color: "white",
                      }}
                    >
                      6 {value.ms}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "64px",
                        color: "white",
                      }}
                    >
                      {value.s}
                    </Typography>
                  </Typography>
                  {/* {value.s} seconds {value.ms} milliseconds */}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    pt: 3,
                    pl: 9,
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "rgb(242, 196, 118)",
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "rgb(242, 196, 118)",
                      borderRadius: "30px",
                      p: 2,
                      fontSize: "16px",
                      fontWeight: 700,
                    }}
                    variant="contained"
                  >
                    Оставить заявку
                  </Button>
                </Typography>

                {/* <div className="imageMarked" /> */}
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
      {/* end of test here */}

      {/* end of here */}
      {/* section */}
      <Box
        sx={{
          backgroundColor: "rgb(212, 145, 31)",
          pl: 10,
          pr: 10,
          pb: 5,
          pt: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between ",
            pt: 7,
            pb: 7,
          }}
        >
          <Box>
            <img
              src="https://static.tildacdn.com/tild6330-6237-4131-a663-303931633762/discount_percent_ben.svg"
              alt="pic"
              style={{
                width: "100px",
                height: "100px",
                maxWidth: "100%",
                marginBottom: "25px",
              }}
            />
            <Typography
              sx={{
                fontSize: "40px",
                color: "white",
              }}
            >
              до 11%
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "white",
              }}
            >
              Скидка на все квартиры
            </Typography>
          </Box>
          <Box>
            <img
              src="	https://static.tildacdn.com/tild6563-3232-4839-a539-393831356134/bank.svg"
              alt="pic"
              style={{
                width: "100px",
                height: "100px",
                maxWidth: "100%",
                marginBottom: "25px",
              }}
            />
            <Typography
              sx={{
                fontSize: "40px",
                color: "white",
              }}
            >
              от 5%
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "white",
              }}
            >
              Льготная ипотека
              <br />
              (предоставляется ПАО
              <br /> "Сбербанк России")
            </Typography>
          </Box>
          <Box>
            <img
              src="	https://static.tildacdn.com/tild3933-6361-4663-b136-646535366537/empty_sandglass_time.svg"
              alt="pic"
              style={{
                width: "100px",
                height: "100px",
                maxWidth: "100%",
                marginBottom: "25px",
              }}
            />
            <Typography
              sx={{
                fontSize: "40px",
                color: "white",
              }}
            >
              0%
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "white",
              }}
            >
              Рассрочка на 12 месяцев
            </Typography>
          </Box>
          <Box>
            <img
              src="https://static.tildacdn.com/tild3133-6563-4561-b438-306365653038/document_stamp_tour_.svg"
              alt="pic"
              style={{
                width: "100px",
                height: "100px",
                maxWidth: "100%",
                marginBottom: "25px",
              }}
            />
            <Typography
              sx={{
                fontSize: "40px",
                color: "white",
              }}
            >
              Мат.капитал
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "white",
              }}
            >
              Жилищные сертфикаты
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* end of section */}
      {/* grey Section */}
      <Box
        sx={{
          backgroundColor: "rgb(87, 87, 87);",
          pt: 5,
          color: "white",
          pl: 48,
          pr: 48,
        }}
      >
        <Box
          sx={{
            mb: 9,
            fontSize: "38px",
            color: "white",
          }}
        >
          О проекте
        </Box>
        <Box
          sx={{
            pb: 15,
          }}
        >
          Жилой комплекс «Краснофлотская» - это современный 16-этажный
          монолитный дом комфорт-класса с навесными фасадами. Просторная входная
          группа с помещением для колясок и велосипедов, а также для консьержа.
          На первых этажах располагаются нежилые помещения. Проектом
          предусмотрено благоустройство территории: спортивные и детские
          площадки, пешеходные дорожки и прогулочные зоны. Объект сдан во 2
          квартале 2024 года.
        </Box>
      </Box>
      {/* end of grey section */}
      {/* building section */}
      <Box sx={{ flexGrow: 1, ml: 15 }}>
        <Grid container spacing={0}>
          <Grid item xs={8}>
            <Box
              sx={{
                fontSize: "38px",
                pb: 9,
                pt: 5,
              }}
            >
              Преимущества проекта
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>
                <Grid item xs={8}>
                  <img
                    src="https://static.tildacdn.com/tild3630-3664-4737-b862-356337326532/re_plan.svg"
                    alt="this"
                    style={{
                      width: "70px",
                      height: "70px",
                    }}
                  />
                  <Box
                    sx={{
                      fontSize: "24px",
                      color: "#040273",
                    }}
                  >
                    Широкая экспозиция лотов
                  </Box>
                  <Box>Квартиры от студий до полноценных 3-комнатных.</Box>
                </Grid>
                <Grid item xs={4}>
                  <img
                    src="https://static.tildacdn.com/tild6131-3133-4464-b630-633566383362/12ft_barbell.svg"
                    alt="this"
                    style={{
                      width: "70px",
                      height: "70px",
                    }}
                  />
                  <Box
                    sx={{
                      fontSize: "24px",
                      color: "#040273",
                    }}
                  >
                    Благоустроенная территория
                  </Box>
                  <Box>
                    Детские и спортивные площадки, прогулочные зоны на
                    территории.
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>
                <Grid item xs={8}>
                  <img
                    src=" https://static.tildacdn.com/tild3932-6463-4439-b233-353336323339/18ked_bulb.svg"
                    alt="this"
                    style={{
                      width: "70px",
                      height: "70px",
                    }}
                  />
                  <Box
                    sx={{
                      fontSize: "24px",
                      color: "#040273",
                    }}
                  >
                    Широкая экспозиция лотов
                  </Box>
                  <Box>Квартиры от студий до полноценных 3-комнатных.</Box>
                </Grid>
                <Grid item xs={4}>
                  <img
                    src="  https://static.tildacdn.com/tild6661-3864-4566-a633-306566343130/18ked_opendoors.svg"
                    alt="this"
                    style={{
                      width: "70px",
                      height: "70px",
                    }}
                  />
                  <Box
                    sx={{
                      fontSize: "24px",
                      color: "#040273",
                    }}
                  >
                    Благоустроенная территория
                  </Box>
                  <Box>
                    Детские и спортивные площадки, прогулочные зоны на
                    территории.
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <img
                src="https://optim.tildacdn.com/tild3838-6265-4432-b261-366563646439/-/resize/500x900/-/format/webp/IMG_3530.jpg"
                alt="this"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* end of building section */}
      {/* diagrame one */}
      <Box
        sx={{
          backgroundColor: "rgb(87, 87, 87)",
          pl: 18,
          pr: 18,
          pt: 10,
          pb: 20,
        }}
      >
        <Box
          sx={{
            fontSize: "38px",
            color: "white",
          }}
        >
          Стоимость квартир
        </Box>
        <Box
          sx={{
            color: "white",
            fontSize: "24px",
          }}
        >
          При нажатии на кнопку «Все планировки» можно посмотреть все варианты{" "}
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Grid
              item
              xs={3}
              sx={{
                pr: 2,
              }}
            >
              <img
                alt="this"
                src="https://optim.tildacdn.com/tild3633-6237-4366-b330-383533333662/-/cover/312x343/center/center/-/format/webp/4__2.png"
              />
              <Box
                sx={{
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Студия от 28,72 м2
              </Box>
              <Box
                sx={{
                  color: "#d4911f",
                  fontSize: "18px",
                }}
              >
                От 3 605 000р.
              </Box>
              <Button
                variant="outlined"
                sx={{
                  color: "#d4911f",
                  mb: 2,
                  mt: 1,
                  borderRadius: "30px",
                }}
              >
                Все планировки
              </Button>
              <br />{" "}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#d4911f",
                  borderRadius: "30px",
                }}
              >
                Узнать подробности
              </Button>
            </Grid>
            <Grid item xs={3}>
              <img
                alt="this"
                src="https://optim.tildacdn.com/tild3336-6530-4732-b233-373563616533/-/cover/260x286/center/center/-/format/webp/2_1.png"
              />
              <Box
                sx={{
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Студия от 28,72 м2
              </Box>
              <Box
                sx={{
                  color: "#d4911f",
                  fontSize: "18px",
                }}
              >
                От 3 605 000р.
              </Box>
              <Button
                variant="outlined"
                sx={{
                  color: "#d4911f",
                  borderRadius: "30px",
                  mb: 2,
                }}
              >
                Все планировки
              </Button>
              <br />{" "}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#d4911f",
                  borderRadius: "30px",
                }}
              >
                Узнать подробности
              </Button>
            </Grid>
            <Grid item xs={3}>
              <img
                alt="this"
                src="https://optim.tildacdn.com/tild6364-3264-4730-b764-383930643339/-/cover/260x286/center/center/-/format/webp/1_1.png"
              />
              <Box
                sx={{
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Студия от 28,72 м2
              </Box>
              <Box
                sx={{
                  color: "#d4911f",
                  fontSize: "18px",
                }}
              >
                От 3 605 000р.
              </Box>
              <Button
                variant="outlined"
                sx={{
                  color: "#d4911f",
                  borderRadius: "30px",
                  mb: 2,
                }}
              >
                Все планировки
              </Button>
              <br />{" "}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#d4911f",
                  borderRadius: "30px",
                }}
              >
                Узнать подробности
              </Button>
            </Grid>
            <Grid item xs={3}>
              <img
                alt="this"
                src="https://optim.tildacdn.com/tild3032-6131-4933-b564-626632393138/-/cover/260x286/center/center/-/format/webp/1_1.png"
              />
              <Box
                sx={{
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Студия от 28,72 м2
              </Box>
              <Box
                sx={{
                  color: "#d4911f",
                  fontSize: "18px",
                }}
              >
                От 3 605 000р.
              </Box>
              <Button
                variant="outlined"
                sx={{
                  color: "#d4911f",
                  borderRadius: "30px",
                  mb: 2,
                }}
              >
                Все планировки
              </Button>
              <br />{" "}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#d4911f",
                  borderRadius: "30px",
                }}
              >
                Узнать подробности
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* diagrame one */}
      {/* white diagrame */}
      <Box
        sx={{
          // backgroundColor: "rgb(87, 87, 87);",
          mt: 9,
          mb: 10,
        }}
      >
        <Box
          sx={{
            pr: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              fontSize: "34px",
              pb: 3,
              fontWeight: 700,
            }}
          >
            Планировки секций
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              fontSize: "24px",
              pb: 3,
              fontWeight: 200,
            }}
          >
            Дом состоит из 4-х секций
          </Box>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={3}>
              <img
                alt="this"
                src="https://optim.tildacdn.com/tild6136-3339-4636-a663-303365616264/-/resize/480x480/-/format/webp/-1_2_.png"
                style={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <img
                alt="this"
                src="https://optim.tildacdn.com/tild6136-3339-4636-a663-303365616264/-/resize/480x480/-/format/webp/-1_2_.png"
                style={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <img
                alt="this"
                src="https://optim.tildacdn.com/tild6136-3339-4636-a663-303365616264/-/resize/480x480/-/format/webp/-1_2_.png"
                style={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <img
                alt="this"
                src="https://optim.tildacdn.com/tild6136-3339-4636-a663-303365616264/-/resize/480x480/-/format/webp/-1_2_.png"
                style={{
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* end of white diagrame */}
      {/* move */}
      <Box
        sx={{
          backgroundColor: "rgb(212, 145, 31)",
          color: "white",
          // overflow: "hidden",
          width: "100%", // Adjust as necessary
          pt: 2,
          pb: 2,
        }}
      >
        <ScrollingText>
          Скидка 5% на все квартиры действует до 30 июня 2024 г. Скидка 5% на
          все квартиры действует до 30 июня 2024 г. Скидка 5% на все квартиры
          действует до 30 июня 2024 г. Скидка 5% на все квартиры действует до 30
          июня 2024 г. Скидка 5% на все квартиры действует до 30 июня 2024 г.
        </ScrollingText>
      </Box>
      {/* end of move */}
      {/* text */}
      <Box
        sx={{
          mb: 20,
          ml: 7,
        }}
      >
        <Box
          sx={{
            fontSize: "38px",
            mt: 10,
            mb: 7,
            fontWeight: 700,
          }}
        >
          Инфраструктура
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Container>
                <List>
                  {items.map((item, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemText
                        primary={
                          <Typography variant="body1">{item}</Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Container>
            </Grid>
            <Grid item xs={6}>
              <Container>
                <List>
                  {items.map((item, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemText
                        primary={
                          <Typography variant="body1">{item}</Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* end of text */}
      {/* image section */}
      <Box sx={{ flexGrow: 1, overflowX: "hidden" }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <img
              alt="this"
              src="https://optim.tildacdn.com/tild3632-6534-4261-b962-646639666431/-/resize/563x/-/format/webp/IMG_2989.jpg"
              style={{
                height: "100%",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <img
              alt="this"
              src="https://optim.tildacdn.com/tild3632-6534-4261-b962-646639666431/-/resize/563x/-/format/webp/IMG_2989.jpg"
              style={{
                height: "100%",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <img
              alt="this"
              src="https://optim.tildacdn.com/tild3632-6534-4261-b962-646639666431/-/resize/563x/-/format/webp/IMG_2989.jpg"
              style={{
                height: "100%",
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <img
              alt="this"
              src="https://optim.tildacdn.com/tild3632-6534-4261-b962-646639666431/-/resize/563x/-/format/webp/IMG_2989.jpg"
              style={{
                height: "100%",
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <img
              alt="this"
              src="https://optim.tildacdn.com/tild3632-6534-4261-b962-646639666431/-/resize/563x/-/format/webp/IMG_2989.jpg"
              style={{
                height: "100%",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <img
              alt="this"
              src="https://optim.tildacdn.com/tild3632-6534-4261-b962-646639666431/-/resize/563x/-/format/webp/IMG_2989.jpg"
              style={{
                height: "100%",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <img
              alt="this"
              src="https://optim.tildacdn.com/tild3632-6534-4261-b962-646639666431/-/resize/563x/-/format/webp/IMG_2989.jpg"
              style={{
                height: "100%",
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <img
              alt="this"
              src="https://optim.tildacdn.com/tild3632-6534-4261-b962-646639666431/-/resize/563x/-/format/webp/IMG_2989.jpg"
              style={{
                height: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* image section */}
      {/* section end */}
      <Box
        sx={{
          ml: 10,
          mr: 10,
          pt: 15,
          pb: 15,
        }}
      >
        <Box
          sx={{
            fontSize: "34px",
            pb: 2,
            fontWeight: 700,
          }}
        >
          Отделка квартир
        </Box>{" "}
        <br />
        <Box
          sx={{
            fontSize: "24px",
            pb: 3,
          }}
        >
          Все квартиры представлены только в черновой отделке.
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img
                alt="this"
                src="https://static.tildacdn.com/tild3838-3565-4435-b462-363435613165/IMG_3459.jpeg"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <Box>
                Установлены перегородки Установлены радиаторы отопления
                Электричество проведено до розеток Квартира без отделки подойдет
                для любителей создавать комфорт под свои желания и идеи.
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* end of section end */}
      {/* bimage */}
      <Box
        sx={{
          // backgroundImage: "url('https://optim.tildacdn.com/tild3632-6534-4261-b962-646639666431/-/resize/563x/-/format/webp/IMG_2989.jpg')",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(20, 20, 20, 0.8)), url('https://optim.tildacdn.com/tild3632-6534-4261-b962-646639666431/-/resize/563x/-/format/webp/IMG_2989.jpg')",

          backgroundSize: "cover", // Ensure the image covers the entire Box
          backgroundRepeat: "no-repeat", // Prevent the image from repeating
          backgroundPosition: "center", // Center the image within the Box
          height: "50vh", // Set a height to ensure the Box is visible
          color: "white", // Set text color to white for contrast
          textAlign: "center", // Center the text horizontally
          opacity: 0.5,
          paddingTop: "40px", // Add padding to center the text vertically
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "38px",
          }}
        >
          Подберем для вас
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "38px",
          }}
        >
          выгодные предложения по ипотеке
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "24px",
          }}
        >
          Квартиры в ипотеку ПСК от 5,3%-11,9%
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "24px",
          }}
        >
          от 15 463 руб/мес
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "24px",
            pb: 5,
          }}
        >
          Действует льготная ипотека от 5%
        </Box>
        <Box
          sx={{
            color: "white",
          }}
        >
          <TextField
            sx={{
              color: "white",
              backgroundColor: "white",
              mr: 3,
            }}
            id="outlined-basic"
            // label="Outlined"
            variant="outlined"
            placeholder="this"
          />
          <TextField
            sx={{
              color: "white",
              backgroundColor: "white",
              mr: 3,
            }}
            id="outlined-basic"
            // label="Outlined"
            variant="outlined"
            placeholder="+13442 346 "
          />
          <Button
            sx={{
              backgroundColor: "#d4911f;",
              pt: 1,
              pb: 1,
            }}
            variant="contained"
          >
            Contained
          </Button>
        </Box>
      </Box>
      {/* end of bimage */}
      {/* pure text */}
      <Box
        sx={{
          ml: 30,
          mr: 30,
          mt: 10,
          mb: 10,
        }}
      >
        <Box
          sx={{
            fontSize: "34px",
            mb: 9,
          }}
        >
          Транспортная доступность
        </Box>
        <Box sx={{ mb: 5, lineSpacing: 5 }}>
          От ЖК "Краснофлотская" до МКАД на автомобиле можно доехать за 30-40
          минут, расстояние составляет 38 км.
          <br /> В 5 минутах ходьбы от дома находится остановка общественного
          транспорта «ДК имени Строгалина», откуда
          <br />
          курсируют автобусы до станции «Пушкино» и ст. м. «ВДНХ». До Москвы
          можно добраться электричкой
          <br />
          Ярославского направления от ж/д станции «Красноармейск», время в
          <br /> пути занимает 1 час 30 минут.
        </Box>
      </Box>
      {/* end of pure text */}
      {/* map */}
      <Box
        sx={{
          pl: 12,
          pt: 5,
          pb: 5,
          color: "white",
          flexGrow: 1,
          backgroundColor: "#575757;",
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={6} sx={{}}>
            <Box
              sx={{
                fontSize: "34px",
                mb: 13,
                mt: 8,
              }}
            >
              Офис продаж{" "}
            </Box>
            <Box
              sx={{
                mb: 2,
              }}
            >
              ст. м. «Семеновская» Время
            </Box>
            <Box
              sx={{
                mb: 2,
              }}
            >
              +7 495 363-16-40
            </Box>
            <Box
              sx={{
                mb: 2,
              }}
            >
              Москва, ул. Ткацкая, д.1 работы:
            </Box>
            <Box
              sx={{
                mb: 2,
              }}
            >
              ежедневно, 9.00 – 19.00
            </Box>
            <Box>*цены указаны с учетом скидки</Box>{" "}
          </Grid>

          <Grid item xs={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63424.75036541101!2d3.0881481!3d6.5157485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1721873397759!5m2!1sen!2sng"
              width="600"
              height="450"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
      </Box>
      {/* end map */}
    </>
  );
};

export default HomeScreen;
