import React from 'react';
import Image from 'next/image';
import { NavbarContainer, SearchContainer } from '@/styles/navbar-styles';
import { Box } from '@mui/material';
import { GrayButton, TextButtons } from '@/styles/common-styles';
import Link from 'next/link';
import { useGetUserDetailsQuery } from "@/Api/services";

const Navbar = () => {
  const { data, error, isLoading } = useGetUserDetailsQuery(
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im13dTVSYzUyTTQtamUwWDJUeU15TiJ9.eyJnaXZlbl9uYW1lIjoiQ29sbGlucyIsImZhbWlseV9uYW1lIjoiS29lY2giLCJuaWNrbmFtZSI6ImNvbGxpbnNrb2VjaGNrMzQiLCJuYW1lIjoiQ29sbGlucyBLb2VjaCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NMZzBWT2N5aGk0OHV6cWRNbDRya2FoY3U0bUVjbFk3dmRFdHRSWmRqYnBPX0E9czk2LWMiLCJsb2NhbGUiOiJlbi1HQiIsInVwZGF0ZWRfYXQiOiIyMDI0LTAzLTIxVDEwOjA4OjIyLjQ5NFoiLCJlbWFpbCI6ImNvbGxpbnNrb2VjaGNrMzRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vZGV2LWF1ZW1vNG9jcHNiengydjcudXMuYXV0aDAuY29tLyIsImF1ZCI6IjNmNWhueXJFeURMTm9OUlhWRkZtYTkwU2dkeHdPWVdPIiwiaWF0IjoxNzExMDE1NzAzLCJleHAiOjE3MTEwNTE3MDMsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTAzNDM0NTY0ODI1NzkzMDQ3ODI0Iiwic2lkIjoiTG90M1l1eEhHcmtTeVdWNmhpaXJ2SnZGa2ZYRXluR2ciLCJub25jZSI6IkJqNHliek54blJkeXRqZHVKcjRfYnFBNEY0dUI1eVloZzNUeEhOb2VyY2cifQ.POJs-Syg4jK1DBaKKPxiBw6kchvHt7RS5GbX-9cpBZVdbCvaRnRicsgDXMwgobMyY042E2CHHrMhL-kEEltt_ZLXQdYOw8nq3WfIlLsWnM-7gUSscOEM4UT6TDJOGlJiVz8Llxa0nSQBuGwnyhtlU8JUqYqjZ3EXmciX4mKEp-tGQaj5qQmlGKD_q0JH3O2tC7PK__T_63k97lZJbttUe6cLXrzVLItIfpjuYW0bTfiHehevYBjJoICGEroPrauPBhiUU23rJtv4PKCiRRGmK5iRdejAKdNXcv_bOdaEZ8FTWbnFBQUdW77rNQs_0fXQ5niqBirOtNsfrIcx1K8QIg"
  );
  console.log(data);
  return (
    <NavbarContainer>
      <Box className="navbar_items">
        <Box sx={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Box className="logo">
            <Image src="/assets/logo.png" alt="logo" width={138.86} height={46.29} />
          </Box>
          <Box>
            <TextButtons>Support</TextButtons>
            <Link href={'/track-order/overview'}>
              {' '}
              <TextButtons>Track Order</TextButtons>
            </Link>
          </Box>
        </Box>

        <SearchContainer>
          <Box className="icon">
            <Image src="/assets/searchIcon.svg" alt="search-icon" width={1} height={1} />
          </Box>
          <input type="text" placeholder="Search" />
        </SearchContainer>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <br/>
          {data?.given_name}
          <GrayButton className="Button_before">
            <Image src="/assets/favIcon.svg" alt="" width={26.18} height={26.18} />
          </GrayButton>

          <GrayButton className="Button_before">
            <Image src="/assets/lockIcon.svg" alt="" width={26.18} height={26.18} />
          </GrayButton>
        </Box>
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
