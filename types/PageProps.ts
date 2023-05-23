export interface PageProps {
  params?: {
    slug?: string;
    page?: string;
    id?: string;
  };
  searchParams?: {
    query?: string;
  };
}
