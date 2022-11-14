export const dailyReward = function (avatarAddress: string): string {
  // daily_reward6
  return (
    "6475373a747970655f69647531333a6461696c795f7265776172643675363a76616c7565736475313a6132303a" +
    avatarAddress.toLowerCase().replace("0x", "") +
    "75323a696431363a" +
    [...Array(32)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("") +
    "6565"
  );
};
