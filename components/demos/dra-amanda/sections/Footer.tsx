"use client";

import { AMANDA_DATA, AMANDA_PALETTE } from "../data";

export function Footer() {
  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: AMANDA_PALETTE.footerBg, minHeight: 380 }}
    >
      <div className="relative max-w-[1440px] mx-auto" style={{ minHeight: 380 }}>
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 32,
            paddingLeft: 120,
            paddingRight: 120,
            paddingTop: 80,
            paddingBottom: 24,
          }}
        >
          {/* Logo */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-fraunces)",
                fontWeight: 400,
                fontSize: 32,
                color: AMANDA_PALETTE.papel,
                margin: 0,
                fontVariationSettings: "'SOFT' 0, 'WONK' 1",
              }}
            >
              {AMANDA_DATA.footer.logo}
            </p>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: 11,
                color: AMANDA_PALETTE.footerMuted,
                letterSpacing: "1.65px",
                marginTop: 8,
                marginBottom: 0,
              }}
            >
              {AMANDA_DATA.footer.logoSub}
            </p>
          </div>

          {/* DADOS */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: 13,
                color: AMANDA_PALETTE.papel,
                letterSpacing: "1.69px",
                marginBottom: 16,
                marginTop: 0,
              }}
            >
              / DADOS
            </p>
            {AMANDA_DATA.footer.dados.map((line, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 400,
                  fontSize: 11,
                  color: AMANDA_PALETTE.footerMuted,
                  letterSpacing: "1.1px",
                  margin: 0,
                  marginBottom: 4,
                }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* NAVEGAR */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: 13,
                color: AMANDA_PALETTE.papel,
                letterSpacing: "1.69px",
                marginBottom: 16,
                marginTop: 0,
              }}
            >
              / NAVEGAR
            </p>
            {AMANDA_DATA.footer.navegar.map((line) => (
              <p
                key={line}
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 400,
                  fontSize: 11,
                  color: AMANDA_PALETTE.footerMuted,
                  letterSpacing: "1.1px",
                  margin: 0,
                  marginBottom: 4,
                }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* REDES */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: 13,
                color: AMANDA_PALETTE.papel,
                letterSpacing: "1.69px",
                marginBottom: 16,
                marginTop: 0,
              }}
            >
              / REDES
            </p>
            {AMANDA_DATA.footer.redes.map((line) => (
              <p
                key={line}
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 400,
                  fontSize: 11,
                  color: AMANDA_PALETTE.footerMuted,
                  letterSpacing: "1.1px",
                  margin: 0,
                  marginBottom: 4,
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="hidden lg:block absolute"
          style={{
            left: 120,
            right: 120,
            bottom: 60,
            height: 1,
            backgroundColor: AMANDA_PALETTE.footerDivider,
          }}
        />

        {/* Copyright + credit */}
        <div
          className="hidden lg:flex absolute justify-between"
          style={{ left: 120, right: 120, bottom: 24 }}
        >
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 400,
              fontSize: 10,
              color: AMANDA_PALETTE.footerMuted,
              letterSpacing: "1px",
              margin: 0,
            }}
          >
            {AMANDA_DATA.footer.copyright}
          </p>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 400,
              fontSize: 10,
              color: AMANDA_PALETTE.footerMuted,
              letterSpacing: "1px",
              margin: 0,
            }}
          >
            {AMANDA_DATA.footer.credit}
          </p>
        </div>

        {/* Mobile placeholder — refina Task 17 */}
        <div className="lg:hidden">{/* Implementar layout mobile na Task 17 */}</div>
      </div>
    </footer>
  );
}
