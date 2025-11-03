import { Container } from './Container';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-brand-bg">
      <Container className="py-6 md:py-10 text-sm text-brand-text/60 px-3 md:px-10">
        <p>
          © {new Date().getFullYear()} Município em Linha. Todos os direitos
          reservados.
        </p>
      </Container>
    </footer>
  );
}
