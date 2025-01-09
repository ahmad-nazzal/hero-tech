"use client";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  VStack,
  Heading,
  ChakraProvider,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { signIn } from "next-auth/react";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const validate = () => {
    if (!email) {
      setError("يرجى إدخال البريد الإلكتروني.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("يرجى إدخال بريد إلكتروني صالح.");
      return false;
    }
    if (!password) {
      setError("يرجى إدخال كلمة المرور.");
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.ok) {
      setIsAuthenticated(true);
      alert("تم تسجيل الدخول بنجاح!");
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("user", email.toString());
    } else {
      setError("بيانات تسجيل الدخول غير صحيحة. حاول مرة أخرى.");
    }
    setLoading(false);
  };

  return (
    <ChakraProvider>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        w="100%"
        p={4}
        bg="gray.50"
      >
        <Box
          w="100%"
          maxW="400px"
          bg="white"
          boxShadow="md"
          borderRadius="lg"
          p={6}
        >
          <VStack spacing={4} align="stretch">
            <Heading as="h2" size="md" textAlign="center" color="purple.600">
              {isAuthenticated ? "مرحبًا، تم تسجيل الدخول!" : "تسجيل الدخول"}
            </Heading>
            {!isAuthenticated ? (
              <>
                <FormControl isRequired isInvalid={!!error}>
                  <FormLabel fontSize="sm">البريد الإلكتروني</FormLabel>
                  <Input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size="sm"
                    borderColor="purple.300"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontSize="sm">كلمة المرور</FormLabel>
                  <Input
                    type="password"
                    placeholder="أدخل كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    size="sm"
                    borderColor="purple.300"
                  />
                </FormControl>
                {error && (
                  <Text fontSize="xs" color="red.500" mt={1}>
                    {error}
                  </Text>
                )}
                <Button
                  colorScheme="teal"
                  w="100%"
                  size="sm"
                  onClick={handleLogin}
                  isLoading={loading}
                  loadingText="جارٍ تسجيل الدخول..."
                >
                  تسجيل الدخول
                </Button>
              </>
            ) : (
              <Text fontSize="md" color="green.500" mt={1}>
                مرحبًا، تم تسجيل الدخول بنجاح!
              </Text>
            )}
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
);

};

export default LoginForm;
