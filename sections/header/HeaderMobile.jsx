"use client"
import ButtonAC from "../../components/ButtonAC";
import Image from "next/image";
import registerlogo_mobile from "../../public/images/profile_circled__mobile.png";
import loginlogo_mobile from "../../public/images/log_in_mobile.png";
import {
  Box,
  Flex,
  IconButton,
  List,
  ListItem,
  Collapse,
  Image as ChakraImage,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import React, { useState } from "react";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sourceItems = [
    "المدونة",
    "المنتدى",
    "قاموس الكلمات",
    "دروس فيديو قصيرة",
    "دليل أدوات الذكاء الاصطناعي",
    "بنك الأسئلة التقنية",
    "دروس وأنماط الميدجورني",
    "لغة الضاد",
  ];
  const Divider = ({ mt = 1, mb = 1 }) => (
    <Box
      as="hr"
      borderBottom="1px solid #A64DC7"
      marginTop={mt}
      marginBottom={mb}
      marginLeft={6}
      marginRight={6}
      opacity="0.9"
    />
  );
  const toggleCollapse = () => setIsOpen(!isOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Box>
    <Flex
      bg="#783BA2"
      color="white"
      alignItems="center"
      justifyContent="space-between"
      height="55px"
      display={{ base: "flex", sm: "none" }}
    >
      <ChakraImage
        src="/images/8e6c847871186b9180f5ae9f99b6bcbc.png"
        width={150}
        height={30.48}
        alt="Logo"
        marginRight={9}
      />
      <IconButton
        onClick={toggleMenu}
        icon={
          menuOpen ? (
            <CloseIcon w={5} h={5} color="white" fontWeight="bold" />
          ) : (
            <Image
              src="/images/vector.png"
              alt="Hamburger Icon"
              width={25}
              height={25}
            />
          )
        }
        variant="ghost"
        aria-label="Toggle Navigation"
        marginLeft="44px"
      />
    </Flex>

    <Collapse in={menuOpen} animateOpacity>
      <Box
        bg="#FFFFFF"
        position="absolute"
        top="55px"
        left={0}
        width="58%"
        zIndex={10}
        boxShadow="lg"
        borderRadius="md"
        display={{ sm: "none" }}
      >
        <List
          textAlign="center"
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.34)"
          paddingBottom={5}
        >
          <ListItem>
            <ButtonAC
              alignSelf="center"
              size="sm"
              color="#783BA2"
              bg="#FFFFFF"
              text="تسجيل الدخول"
              fontSize={16}
              fontWeight={500}
              icon={
                <Image
                  src={loginlogo_mobile}
                  alt="Login Icon"
                  style={{ width: "25.71px", height: "30px" }}
                />
              }
              href="/signin"
              sx={{ width: "100%" }}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonAC
              alignSelf="center"
              size="sm"
              color="#783BA2"
              bg="#FFFFFF"
              text="إنشاء حساب"
              fontSize={16}
              fontWeight={500}
              icon={
                <Image
                  src={registerlogo_mobile}
                  alt="Register Icon"
                  style={{ width: "30px", height: "30px" }}
                />
              }
              href="/register"
              sx={{ width: "100%" }}
            />
          </ListItem>
          <Divider />
          {["المسارات التعليمية", "المصادر", "التواصل"].map(
            (item, index, array) => (
              <ListItem
                key={index}
                fontSize="16px"
                fontWeight={500}
                color="#713488"
                _hover={{
                  color: "white",
                }}
                onClick={(e) => {
                  e.target.style.backgroundColor = "#783BA2";
                  e.target.style.border = "15px solid #783BA2";
                  e.target.style.color = "white";
                  e.target.style.borderRadius = "8px";
                }}
                paddingTop={2}
              >
                {item === "المصادر" ? (
                  <Link
                    href="#"
                    onClick={toggleCollapse}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",

                      gap: "3px",
                    }}
                  >
                    <ChakraImage
                      src="/images/Polygon 2.png"
                      alt="Dropdown Arrow Icon"
                      style={{
                        width: "12px",
                        height: "10px",
                        marginTop: "3px",
                      }}
                    />
                    {item}
                  </Link>
                ) : (
                  <Link href="#">{item}</Link>
                )}
                {item === "المصادر" && (
                  <Collapse in={isOpen}>
                    <Box
                      color="#713488"
                      paddingBottom={1}
                      bg="#F4EFF5"
                    >
                      <List
                        spacing="6px"
                        borderRadius="md"
                        boxShadow="0px 1px 3px rgba(0, 0, 0, 0.3)"
                        paddingTop="11px"
                      >
                        {sourceItems.map((sourceItem, index) => (
                          <ListItem
                            key={index}
                            fontSize="14px"
                            fontWeight={501}
                          >
                            {sourceItem}
                            {index < sourceItems.length - 1 && (
                              <Divider mb={0.9} mt={3} />
                            )}
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Collapse>
                )}
                {index < array.length - 1 && <Divider mt={3} mb={2} />}
              </ListItem>
            )
          )}
        </List>
      </Box>
    </Collapse>
  </Box>
  );
};

export default HeaderMobile;
