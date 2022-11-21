export type Profile = {
  provider: string;
  id: string;
  username: string;
  displayName: string;
  profileUrl: string;
  photos: [string];
  country: string;
  followers: number;
  product: null;
  _raw: string;
  _json: {
    display_name: string;
    email: string;
    external_urls: {
      spotify: string;
    };
    followers: { href: string; total: number };
    href: string;
    id: string;
    images: [string];
    type: string;
    uri: string;
  };
  emails: [{ value: string; type: null }];
};
