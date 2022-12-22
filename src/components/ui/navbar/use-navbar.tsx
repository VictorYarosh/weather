const useNavBar = () => {
  const handleOpenNewLinksGitHub = () => {
    window.open('https://github.com/VictorYarosh/weather', '_blank');
  };
  const handleOpenNewLinksLinkedIn = () => {
    window.open(
      'https://ua.linkedin.com/in/victor-yarosh-801b45212/uk?trk=people-guest_people_search-card',
      '_blank'
    );
  };

  return {
    handleOpenNewLinksGitHub,
    handleOpenNewLinksLinkedIn
  };
};

export default useNavBar;
