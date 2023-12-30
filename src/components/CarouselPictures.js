import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./CarouselPictures.css"
function CarouselPictures() {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          style={{
            backgroundImage: `url(${"https://lh3.googleusercontent.com/pw/ABLVV84v1oOu0Y2x2Ji4NiLfaSC0KGL3bN3gv4kpWKmVwPR0nZPRfB7Six07xmmhCV-4eTKmw9RoiS2BXs2thPh8AYNTy59ByLfVVb2OzTheQecDaxVRDDdLOMtfFFw2kbUzRPNfrH4dOg8w553ntEXYiXlfe69_VU5s_KZILyKoLhrcpDSFKXrnuk8BWHvbkgGoyqhSvzl0aceJT7yMHzpaEQKHBU4Wh3auTntL_RlECOvD9M-yENFXqDIzJIdSNrfvUJrWKsweaH-_bkGmr2jmplwi_Q_33X9IOd9gJEcBBzXQUJ5P_lqYQ75IUO-U3P3Gawow5W8WRlcz4HlLU5HsG_ghb4R8nxgesftkwG5u8SSJDIfxgOnG33XefbkaqLgme3lrO8ogrmxaOdca5ESL509h0-cYIYlqxBaptaufipV-vEpK5Rn0USAlWfSliXOD4p1bBxciw-B6gVLLtUyFGaUDpUQK96h2EnKdx_IFwySu9vxsO-4aujgErUSK_FoHzt65ClD_PMuk1-v2Odf4_Ut80C0PiriyObwMWWC14iCIaaHdd98PxPF_61Qz4eZvPy7PHlOsw-H4t2EopaCjfaTN6cDpQ-6JO3m_SPV952THSCm-me1l7gGi0loViDw5xwEcR-NWPjEj6rJ_P-uhzVDkCNyknXMUHmqoogsF6OAacs1Lwl4vN3nvhJvRq94CkGK5jDz1IHZ_FyHghLGpG1_XWVXT4Y1nyjhOEf5XXsKim6_CdDRN_AkzE3cGf-rZhsYzqMvAToswnJv1r1EoMJQ_ecSRQ8xzJTWNfrdxOYs0jiuA-BYiXnsJ6BCpfSQUxVCipssNVXC-eNw23auVIvM8OjJEcXDUgEJ_yncPp8BLwsMPivfj6qorYw0x-lXypFD1HNbuZ8eTrDxMEZNk6o2ujorXM0OVBIbsbP_H6EtkEYymM7LdvanBIozcN6lND3QsSBNmfYw=w2256-h1271-s-no-gm?authuser=2"})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: '600px'
          }}
        ></div>
        <Carousel.Caption className='custom-caption'>
          <h3>The largest pattern guide website (hope so)</h3>
          <p>The most complete database of CS2 skins with unique patterns.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            backgroundImage: `url(${"https://lh3.googleusercontent.com/pw/ABLVV86voCrq3pz8x1yPwz7pZ94PfTvG1TS2gktAOBVn5aLlpKdEMDKlDeE6Rb3GT_QvvkUQxVGBeUIbjeniigT5kyuxkPMdkUDB6DfKT92uqMi1oqOsQNXAQeq3c31rAr93anMCt4WWcmFit0WUxbyVGKeyqXGpfbt6WHG51g6_imwHNcW6516gCiu1z3wfEOcAl3crEvDDSfdr3gWyRZcIuiEQJFQKaac-VhIHZjSYRrG91lkDwFpQcaFTcRe0JrC9EIx7X_fl8kXziuxiJNm21doPMMqbi707QrFOEoktsBq4HcA6r5-xCywxOabnf2w3FsKDdiPYD7bGuFd9TQymOR-2l2rXOrYg-VIm1QzVWEB1v5XHp8_memZT072CM3lw2qKvZJPOOvVfrQHY_NFoiWVsEpBxDCf6ujZsqV-2796Hpm897rc6rRnIpqhO0K4tyqN_9qS7HyDtGDtW5DcbCF-zyI5AGq14XroeYvG_Whl8jpbuRrPa7S4Z7e6ohR0TmE3WVPFRQF7HhhXGbj6XdiuOporyl0ScYphDj5hkFCwGGx57MWAselV0ElykhL2W69l8VaA9DsUvH9ydEtW1840s30Jv1JkHIth0vuywDZK4vb_wyHKbR9oXsldmMohabqpLATlXbO83KbUJLTBFqkmiL9a2jHqXTCmpnavymRj745qhiYh0WISa8oZmA14-ZV-_qbq99EGP5u_ZTW3vDQq9lRBtI4eVKzGYQ2W6WGHRDgyAUvw1W6CCRjEJfqruSXksnH5QPPpY5dGpvcSE199f6_tTN_FEX4FqZPeZ1-ZYn-qRi4E9jFrVHZ6ZGaifUg9GW-pDjWbao355DJD8uU1VWaj3vYvd7oXcnO3BCW7Rr1niI2ilJPpHzh09R8JQeyue9ZvpbyjuknymwEcTeV3CjjL7ZmEibV2gPO53Fj291vLp_-9byeHBeQwdF_KKQqDA_072wN8=w1278-h719-s-no-gm?authuser=2"})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: '600px'
          }}
        ></div>
        <Carousel.Caption className='custom-caption'>
          <h3>Explore through all the rare pattern skins</h3>
          <p>Patterns of all weapons, knives and gloves.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            backgroundImage: `url(${"https://lh3.googleusercontent.com/pw/ABLVV85moqLJ5v1i0rjQ3fNrgwQrhUa-eSPfXCLL2H97S3G8JMGDJ7aFqID8nmW55aOv3b6hQq2Z0Nko0Miy9ZmaVOkqSOjMaH5HLBmRPE11zN0u_VjZI1bEYQq31_C-QmYB8kuuft4M_XnrEBXYsTtISu6U4BXN6y0LM5Au5wxdX6W2w1HMcUC0IhcFUoQY2MZ1dvLSNxJ6ijT7Y8lpqmGsoBMGM4A4G1UueRL2_I6XFVqCeIHcsaqSVsZeLJLxX4mJJhGakrFQ9__U6Tf5pblbxE6Vno5yX0wdnZl1LcB6mr596T9P7q0uf62JBa0kAabV2lwx4WFYRI2Jd6UqSz_x-v4AIjEVXX6vHNEO1xjXuROzBsErIs7GKew34fM6GLuJ8Nfsjwz7Za3Piw1EpVwYAgFNzcOEc-gjBu-KNzuRpl3mS0lFT5Q1uo9lppf6LgTCEiWA0dDUGvDxXKj0Zol6JRfEfVkqvIgi03OugepJk_oOQLKnIzAI9A-fNKvu9eH5RUWlVRvHgi0pB8gzCrmeWl_AQvddKpepUAYfGo-eDt74fpZjjV4UzQMo0CP4xXW1baCzEwsdZUkvZ4c9nWeYiqQsqabbObxJ023yAx194AvlI1ysgxf19CnMqPYM14It7qQKXPEucbuLomndU7GAJsCXx_OpTw7xg4AjPWyX2sRnvaMF9MURyKiVRZJQgg8l9i3lNaMUUiOpdlElUcIHwqTfK_E8MU8E-49C-TseiNOAxF6mjkFNcFTItbYtMuDgdjEUMA4pBP2jqXDJuGrB6rc2Pp0UKRUblHcqm3IaK-bNTYLAI4DwrCBVCpFuyNCJ0MjzCBvVyjE4awuq2GtYut9Wk_yJdzMella405bf0PJeWVZNJGmS3qOgOOz3QaWJc8mCDy654SSPWDMZ_QnzY4vuM-h9gGBfMDmdDj_2Q8bSW5HeFAXT8V2C8cpdDR_GsZe1f_FcfZk=w1278-h721-s-no-gm?authuser=2"})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: '600px'
          }}
        ></div>
        <Carousel.Caption className='custom-caption'>
          <h3>Don't be afraid to contact me</h3>
          <p>If you have any ideas for adding content, don't be afraid to hit me up!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPictures;
