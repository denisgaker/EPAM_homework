export type SocialNetworkLinksType = {
  [key in SocialNetworkLinksKey]: string;
};

enum SocialNetworkLinksKey {
  name = 'name',
  link = 'link',
  desc = 'desc',
  target = 'target',
  key = 'key',
}
