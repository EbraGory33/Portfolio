import { ReactNode } from "react";
import { Container, Divider, PageGrid } from "..";

interface PageBuilderProps {
  children: ReactNode;
}

export function PageBuilder({ children }: PageBuilderProps) {
  return (
    <Container>
      <PageGrid>
        <Divider />
        {children}
        <Divider />
      </PageGrid>
    </Container>
  );
}
