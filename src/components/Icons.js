import Styled from "styled-components";

import {Mail} from "@styled-icons/ionicons-solid/Mail";
import { FolderOpen } from "@styled-icons/ionicons-solid/FolderOpen";
import { LogoLinkedin } from "@styled-icons/ionicons-solid/LogoLinkedin";
import { LogoGithub } from "@styled-icons/ionicons-solid/LogoGithub";

export const EmailIcon = Styled(Mail)`
  width: 30px;

  @media (max-width: 992px) {
    width: 20px;
  }
`

export const FolderIcon = Styled(FolderOpen)`
  width: 30px;
  margin: 3px;

  @media (max-width: 992px) {
    width: 20px;
  }
`;

export const LinkedInIcon = Styled(LogoLinkedin)`
  width: 30px;

  @media (max-width: 992px) {
    width: 20px;
  }
`;

export const GithubIcon = Styled(LogoGithub)`
  width: 30px;

  @media (max-width: 992px) {
    width: 20px;
  }
`;