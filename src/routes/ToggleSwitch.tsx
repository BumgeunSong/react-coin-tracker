import { RecoilState, useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 34px;
`;

const Switch = styled.div<{ isToggled: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => (props.isToggled ? '#2196F3' : '#ccc')};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${props => (props.isToggled ? 'translateX(26px)' : 'translateX(0)')};
  }
`;

const ModeSwitchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
`

const ModeSwitchLabel = styled.span`
    font-size: 24px;
    font-weight: bold;
    margin-right: 16px;
`

interface ToggleSwitchProps {
  toggleState: RecoilState<boolean>
}

function ToggleSwitch({ toggleState }: ToggleSwitchProps) {

  const [isOn, setIsOn] = useRecoilState(toggleState)

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <ToggleContainer>
      <Switch isToggled={isOn} onClick={handleToggle} />
    </ToggleContainer>
  );
};

function ToggleSwitchHeader({ toggleState }: ToggleSwitchProps) {
  return (
    <ModeSwitchContainer>
      <ModeSwitchLabel>{useRecoilValue(toggleState) ? "Dark Mode" : "Light Mode"}</ ModeSwitchLabel>
      <ToggleSwitch toggleState={toggleState} />
    </ModeSwitchContainer>
  )
}

export default ToggleSwitchHeader;